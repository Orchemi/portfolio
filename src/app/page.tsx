'use client';

import Providers from '@/components/providers/Providers';
import Home from '@/components/home/Home';
// import Providers from '@components/providers/Providers';

export default function MainPage() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
