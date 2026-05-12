import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neal - Neo-Brutalist Portfolio Skeleton',
  description:
    'A Vercel-ready Next.js, Tailwind, and Framer Motion portfolio skeleton with a neo-brutalist landing page.',
  openGraph: {
    title: 'Neal - Neo-Brutalist Portfolio Skeleton',
    description:
      'A polished initial portfolio shell with subtle motion, thick borders, and room for the 2026 frontend design meta.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
