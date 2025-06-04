import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import ContextProvider from '~/lib/ContextProvider';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'Tursunov Amir',
  description: 'Personal portfolio of Tursunov Amir',
  icons: [
    {
      rel: 'icon',
      url: '/photo1.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
