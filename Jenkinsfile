pipeline {
    agent {
        node {
            label 'Linux_Default||masterLin'
        }
    }
    environment {
        ALLURECTL_HOME = tool name: 'allurectl-2.15.1', type: 'allure'
        CERT_PATH = '/tmp/mmzp.crt'
        KEY_PATH = '/tmp/mmzp.key'
    }
    stages {
        stage('Clean up') {
            steps {
                sh 'rm -rf ./node_modules'
                sh 'rm -rf ./html-results'
                sh 'rm -rf ./allure-results'
            }
        }
        stage('Установка npm пакетов') {
            steps {
                catchError {
                    nodejs('v16.20.2-linux-x64') {
                        withCredentials([
                            file(credentialsId: 'certs_MMZP', variable: 'CERT_FILE'),
                            string(credentialsId: "NPM_REGISTRY", variable: "NPM_REGISTRY"),
                            string(credentialsId: "SBEROSC_TOKEN", variable: "SBEROSC_TOKEN")
                        ]) {
                            // Копируем сертификат во временную директорию
                            sh """
                                cp \${CERT_FILE} ${CERT_PATH}
                                chmod 600 ${CERT_PATH}
                            """
                            
                            // Используем сертификат для npm
                            sh """
                                NODE_TLS_REJECT_UNAUTHORIZED=0 npm ci \
                                --registry=${NPM_REGISTRY} \
                                --strict-ssl=false \
                                --cert=${CERT_PATH} \
                                --key=${KEY_PATH} \
                                --legacy-peer-deps
                            """
                            
                            sh "NODE_TLS_REJECT_UNAUTHORIZED=0 PLAYWRIGHT_DOWNLOAD_HOST=https://token:${SBEROSC_TOKEN}@sberosc.sigma.sbrf.ru/repo/playwright npx playwright install"
                            sh "npm run test:playwright:e2e"
                            
                            // Удаляем временные файлы сертификатов
                            sh "rm -f ${CERT_PATH} ${KEY_PATH}"
                        }
                    }
                }
            }
        }
        stage('Отправка отчета в TestOps') {
            steps {
                withCredentials([
                    string(credentialsId: "TESTOPS_TOKEN", variable: "TESTOPS_TOKEN"),
                    file(credentialsId: 'certs_MMZP', variable: 'CERT_FILE')
                ]) {
                    sh "${ALLURECTL_HOME}/allurectl --version"
                    sh """
                        ${ALLURECTL_HOME}/allurectl upload \
                        --ci-type jenkins \
                        --endpoint https://testops.sigma.sbrf.ru \
                        --token ${TESTOPS_TOKEN} \
                        --project-id 1261 \
                        --launch-tags local \
                        --launch-name "${BRANCH_NAME} - #${BUILD_NUMBER}" \
                        --cert ${CERT_FILE} \
                        ./allure-results
                    """
                }
            }
        }
    }
    post {
        always {
            // Очистка временных файлов сертификатов
            sh "rm -f ${CERT_PATH} ${KEY_PATH}"
        }
    }
}