import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import ContextProvider from '~/lib/ContextProvider';
import Background from '~/components/Background';
import CustomCursor from '~/components/CustomCursor';
import '~/styles/globals.css';

export const metadata: Metadata = {
// ... existing metadata
  title: 'Tursunov Amir | Frontend Developer',
  description: 'Professional portfolio of Tursunov Amir, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Tursunov Amir', 'Frontend Developer', 'React', 'Next.js', 'Portfolio', 'Uzbekistan', 'Web Developer'],
  openGraph: {
    title: 'Tursunov Amir | Frontend Developer',
    description: 'Professional portfolio of Tursunov Amir.',
    url: 'https://amirtursunov.com', // Replace with actual domain if known
    siteName: 'Tursunov Amir Portfolio',
    images: [
      {
        url: '/bg.jpg', // You can replace this with an actual screenshot of the site
        width: 1200,
        height: 630,
        alt: 'Tursunov Amir Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
        <Background />
        <CustomCursor />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
