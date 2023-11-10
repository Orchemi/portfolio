import PanmnesiaNavbar from '@/components/panmnesia/navbar/PanmnesiaNavbar';
import { generatePanmnesiaMetadata } from '@/utils/panmnesia/generatePanmnesiaMetadata';
import { getPanmnesiaBaseUrl } from '@/utils/panmnesia/getPanmnesiaBaseUrl';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePanmnesiaMetadata({
  title: 'Main',
  description:
    'True composable resource disaggregation, CXL hardware/software infrastructure from the beginning to the end.',
  url: `${getPanmnesiaBaseUrl()}`,
});

export default function PanmnesiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'}>
      <body>
        <PanmnesiaNavbar />
        {children}
      </body>
    </html>
  );
}
