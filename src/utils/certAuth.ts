import * as fs from 'fs';
import * as https from 'https';

interface CertificateConfig {
  cert: Buffer;
  key: Buffer;
  passphrase?: string;
}

export class CertificateAuth {
  private config: CertificateConfig;

  constructor(certPath: string, keyPath: string, passphrase?: string) {
    this.config = {
      cert: fs.readFileSync(certPath),
      key: fs.readFileSync(keyPath),
      passphrase
    };
  }

  getHttpsAgent() {
    return new https.Agent({
      cert: this.config.cert,
      key: this.config.key,
      passphrase: this.config.passphrase
    });
  }
}

export const createCertAuth = (certPath: string, keyPath: string, passphrase?: string) => {
  return new CertificateAuth(certPath, keyPath, passphrase);
}; 