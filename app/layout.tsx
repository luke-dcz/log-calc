import './globals.css';
import { Suspense } from 'react';
import { Raleway } from 'next/font/google';
import Loading from './loading';
import NotFound from './not-found';
import ErrorBoundary from '../components/error-boundary';

const raleway = Raleway({ subsets: ['latin'] });

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
      <body className={raleway.className}>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<NotFound />}>{children}</ErrorBoundary>
        </Suspense>
      </body>
    </html>
  );
}
