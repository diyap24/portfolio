import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio — Diya Patel',
  description: 'Sleek, modern portfolio showcasing projects and experience.',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-hero-gradient bg-no-repeat">
        {children}
      </body>
    </html>
  );
}

