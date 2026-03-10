import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Tuki – Reggaeton Old School',
  description: 'La experiencia definitiva del reggaeton old school. Buenos Aires, Argentina.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;700;900&display=swap"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
