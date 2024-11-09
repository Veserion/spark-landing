'use client';
import { ThemeProvider, useTheme } from 'next-themes';
import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { setTheme } = useTheme();

  if (typeof window !== 'undefined') {
    setTheme(localStorage.getItem('theme') || 'dark');
  }

  return (
    <html lang="en" className={syne.className}>
      <head>
        <style jsx global>{`
            :root {
                --background-color: #fff;
                --text-color: #000;
                --light: #FFFFFF;
                --light-a: #FFFFFFE6;
                --light-500: rgba(247, 247, 247, 1);
                overflow: hidden;
            }

            [data-theme='dark'] {
                --background-color: #000;
                --text-color: #fff;
                --gray-text: rgba(177, 177, 177, 1);
            }

            body {
                background-color: var(--background-color);
                color: var(--text-color);
                transition: background-color 0.3s ease;
                margin: 0;
                padding: 0;
                height: 100vh;
                width: 100vw;
                overflow-x: hidden;
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                position: relative;
            }

            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
            }
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
