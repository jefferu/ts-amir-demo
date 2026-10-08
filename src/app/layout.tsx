import type { Metadata } from 'next';
import './globals.css';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Tennisschule Amir | Tennistraining & Camps in Darmstadt & Weiterstadt',
  description:
    'Professionelles Tennistraining für Kinder, Jugendliche und Erwachsene. Geleitet von Cheftrainer Amir Reza (Davis Cup Spieler, ATP A-Lizenz & Rafa Nadal Academy Talent Scout). Offizieller Partner der SG Weiterstadt.',
  keywords: [
    'Tennisschule Amir',
    'Amir Reza',
    'Tennis Darmstadt',
    'Tennis Weiterstadt',
    'SG Weiterstadt Tennis',
    'Tenniscamp Weiterstadt',
    'ATP Trainer',
    'Rafa Nadal Academy Scout',
    'Kindertennis Weiterstadt',
    'Privattraining Tennis',
  ],
  authors: [{ name: 'Amir Reza' }],
  openGraph: {
    title: 'Tennisschule Amir | Dein Tennistrainer in Darmstadt & Weiterstadt',
    description:
      'Professionelles Tennistraining auf Champions-Niveau mit Cheftrainer Amir Reza. Kurse, Privattraining und Feriencamps.',
    url: 'https://ts-amir.de',
    siteName: 'Tennisschule Amir',
    images: [
      {
        url: 'https://ts-amir.de/images/Logo-Amir.png',
        width: 800,
        height: 600,
        alt: 'Tennisschule Amir Logo',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

/**
 * Root Application Layout.
 * Uses high-performance native font stack to guarantee offline resilience and avoid external network font calls.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href={`${basePath}/favicon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.png`} />
      </head>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-tennis-accent selection:text-slate-950">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
