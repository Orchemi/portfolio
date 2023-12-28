import Providers from '@/components/providers/Providers';
import '../styles/global.scss';
import type { Metadata } from 'next';
import Nav from '@/components/common/Nav';

export const metadata: Metadata = {
  title: '개발 블로그',
  description: 'Next.js + MDX + SCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'ko'}>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
