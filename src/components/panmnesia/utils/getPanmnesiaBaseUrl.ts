import { getBaseURL } from '@/apis/requestClient';
import { PANMNESIA } from '@/components/panmnesia/constants/common';

export const getPanmnesiaBaseUrl = () => {
  return `${getBaseURL()}/${PANMNESIA.panmnesia}}`;
};
