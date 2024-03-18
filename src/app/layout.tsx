import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';

const monserrat = Montserrat({ subsets: ['latin'] });

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
