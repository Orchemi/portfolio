import { generatePanmnesiaMetadata } from '@/components/panmnesia/utils/generatePanmnesiaMetadata';
import { getPanmnesiaBaseUrl } from '@/components/panmnesia/utils/getPanmnesiaBaseUrl';
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
        <div>panmnesia layout</div>
        {children}
      </body>
    </html>
  );
}
