import { ERROR, ERROR_MESSAGE, ErrorType } from '@/constants/error.constant';
import { NextResponse } from 'next/server';

export interface ErrorResponse {
  code: ErrorType;
  message: string;
}

export interface IGenerateErrorResponse {
  status?: number;
  code?: ErrorType;
  message?: string;
  language?: 'EN' | 'KR';
}

export const generateErrorResponse = ({
  status = 500,
  code = ERROR.SERVER_ERROR,
  message = '',
  language = 'EN',
}: IGenerateErrorResponse): NextResponse => {
  return NextResponse.json<ErrorResponse>(
    {
      code,
      message: message || ERROR_MESSAGE[code][language],
    },
    { status },
  );
};
