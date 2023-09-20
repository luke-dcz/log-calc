import './globals.css';
import { Suspense } from 'react';
import { Inter } from 'next/font/google'; //update import to chosen font
import Link from 'next/link';
import Loading from './loading';
import NotFound from './not-found';
import ErrorBoundary from '../components/error-boundary';

const inter = Inter({ subsets: ['latin'] }); //Change this line to your chosen font

export const metadata = {
  title: 'YOUR APP NAME', //Change this to the title of your app
  description: 'Generated with create next app with custom template', //Add a small description of your app here
};

//Change this layout to whatever base layout for each pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* import your navbar/footer layout component here (replace the div too) */}
        <div className="flex gap-x-2">
          <Link href={'/'} className="">
            Home
          </Link>
          <Link href={'/other-page'}>Other page</Link>
        </div>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallback={<NotFound />}>
            <div className={inter.className}>{children}</div>
          </ErrorBoundary>
        </Suspense>
        {/* import your footer layout component here */}
      </body>
    </html>
  );
}
