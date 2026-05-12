import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neal Malhotra - Neo-brutalist Portfolio',
  description: 'An adaptable Next.js portfolio skeleton with Tailwind CSS and Framer Motion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
