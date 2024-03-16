import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Инженерия искусственного интеллекта',
  description: 'Магистерская программа ИРИТ-РТФ УрФУ',
  openGraph: {
    title: 'Инженерия искусственного интеллекта',
    description: 'Магистерская программа ИРИТ-РТФ УрФУ',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://aiengineer-urfu.vercel.app',
    images: [
      'https://static.tildacdn.com/tild3235-6237-4233-b233-336365613037/-/resize/504x/Logotip_RTF.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
