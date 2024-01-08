export const ERROR = {
  UNKNOWN: 'UNKNOWN',
  SERVER_ERROR: 'SERVER_ERROR',
  INVALID_DATA: 'INVALID_DATA',
  ALREADY_EXISTS_USER: 'ALREADY_EXISTS_USER',
} as const;

export const ERROR_MESSAGE: Record<ErrorType, ErrorMessageType> = {
  UNKNOWN: {
    EN: 'Unknown Error',
    KR: '알 수 없는 오류가 발생했습니다.',
  },
  SERVER_ERROR: {
    EN: 'Server Error',
    KR: '오류가 발생했습니다.',
  },
  INVALID_DATA: {
    EN: 'Invalid Data',
    KR: '잘못된 데이터입니다.',
  },
  ALREADY_EXISTS_USER: {
    EN: 'User already exists',
    KR: '이미 존재하는 사용자입니다.',
  },
};

export type ErrorType = keyof typeof ERROR;
export type ErrorMessageType = {
  EN: string;
  KR: string;
};

export const ERROR_LIST = Object.values(ERROR);
export const ERROR_SET = new Set(ERROR_LIST);
