import type { Metadata } from 'next';
import { Zalando_Sans_Expanded, Zalando_Sans } from 'next/font/google';
import './globals.css';

const zalandoSans = Zalando_Sans({
  variable: '--font-zalando-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const zalandoSansExpanded = Zalando_Sans_Expanded({
  variable: '--font-zalando-sans-expanded',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
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
