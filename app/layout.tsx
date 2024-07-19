import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Big Eeemma\'s Bakery',
  description: 'The best bakery this side of Forsyth!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='bg-sprinkle-bg bg-cover bg-center' data-theme='mytheme' lang='en'>
      <body>
        <Header />
        <main className='container mx-auto pt-6 pb-24 min-h-screen'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
