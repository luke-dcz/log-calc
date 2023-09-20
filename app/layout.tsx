import './globals.css';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Loading from './loading';
import NotFound from './not-found';
import ErrorBoundary from '../components/error-boundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Logarithm Calculator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<NotFound />}>{children}</ErrorBoundary>
        </Suspense>
      </body>
    </html>
  );
}
