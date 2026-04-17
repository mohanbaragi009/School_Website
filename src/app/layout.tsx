
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seshadripuram Gateway - Excellence in Education',
  description: 'Official portal for Seshadripuram Gateway school management and academic content.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
