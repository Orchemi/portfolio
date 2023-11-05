import { getBaseURL } from '@/apis/requestClient';
import { PANMNESIA } from '@/constants/panmnesia';

export const getPanmnesiaBaseUrl = () => {
  return `${getBaseURL()}/${PANMNESIA.panmnesia}}`;
};
