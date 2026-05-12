import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Neal — Portfolio',
  description: 'A neo-brutalist portfolio inspired by stefanvitasovic.dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
