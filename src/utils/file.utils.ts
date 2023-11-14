import { getBaseURL } from '@/apis/requestClient';
import { getCookie } from './cookie';

export interface IFileDownloadProps {
  path: string;
  fullPath?: boolean;
  fileName: string;
  body?: any;
}

export const fileDownload = ({ path, fullPath = false, fileName, body }: IFileDownloadProps) => {
  return fetch(
    `${!fullPath && getBaseURL()}${path}`,
    Object.assign(
      {
        method: body ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
          token: getCookie('token')!,
        },
      },
      body ? { body: JSON.stringify(body) } : {},
    ),
  )
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.addEventListener('click', (e) => e.stopPropagation());
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
};
