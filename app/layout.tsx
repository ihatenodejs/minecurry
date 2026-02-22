import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const zalandoSans = localFont({
  src: [
    {
      path: '../public/font/ZalandoSans.ttf',
      style: 'normal',
    },
    {
      path: '../public/font/ZalandoSans-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-zalando-sans',
  display: 'swap',
});

const zalandoSansExpanded = localFont({
  src: [
    {
      path: '../public/font/ZalandoSansExpanded.ttf',
      style: 'normal',
    },
    {
      path: '../public/font/ZalandoSansExpanded-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-zalando-sans-expanded',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MineCurry',
  description: 'Downloads for MineCurry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zalandoSans.variable} ${zalandoSansExpanded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
