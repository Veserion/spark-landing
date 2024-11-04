'use client';
import { ThemeProvider } from 'next-themes';
import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning className={syne.className}>
      <head>
        <style jsx global>{`
          :root {
            --background-color: #fff;
            --text-color: #000;
          }

          [data-theme='dark'] {
            --background-color: #000;
            --text-color: #fff;
          }

          body {
            background-color: var(--background-color);
            color: var(--text-color);
            transition: background-color 0.3s ease;
            margin: 0;
            padding: 0;
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
