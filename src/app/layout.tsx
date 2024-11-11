import './globals.css';
import { Providers } from './providers';
import { CookieNotification } from '@/app/components/CookieNotification/CookieNotification';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          {children}
          <CookieNotification />
          <div id="portal-root" />
        </Providers>
      </body>
    </html>
  );
}
