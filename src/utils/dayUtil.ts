import dayjs from 'dayjs';

/** 서버로부터 받은 string타입의 시간을 받으면, 현재를 기준으로 몇일 전인지 반환하는 함수 */
export const getDayDiffFromLastModified = (lastUpdatedDate: string | undefined) => {
  if (!lastUpdatedDate) return;
  const now = dayjs().locale('ko');
  const diffDate = now.diff(dayjs(lastUpdatedDate).locale('ko'), 'day');
  return diffDate <= 0 ? '오늘' : `${diffDate.toFixed()}일 전`;
};

/** 서버로부터 받은 string타입의 시간을 받으면, YYYY.MM.DD 00:00 꼴로 변환시켜주는 함수 */
export function formatDate(targetDate: string | undefined, time: boolean = true, alternativeText: string = '') {
  if (!targetDate) return alternativeText;
  const date = dayjs(targetDate);
  return date.format(`YYYY.MM.DD${time ? ' ' + date.format('HH:mm') : ''}`);
}

/** 서버로부터 받은 string타입의 시간을 받으면, YYYY.MM.DD 오전 00:00 꼴로 변환시켜주는 함수 */
export function formatDateForKorea(targetDate: string | undefined, time: boolean = true, alternativeText: string = '') {
  if (!targetDate) return alternativeText;
  const date = dayjs(targetDate).locale('ko');
  const hours = date.hour();
  const isPM = hours >= 12;
  const timeFormat = isPM ? '오후' : '오전';
  const formattedHours = hours % 12 || 12; // 12시간제로 변환하고, 0시를 12시로 표기
  return date.format(`YYYY.MM.DD${time ? ' ' + timeFormat + ' ' + formattedHours + ':' + date.format('mm') : ''}`);
}

/**
 * 서버로부터 string타입의 시간을 받으면, YYYY.MM.DD(요일) 00:00 꼴로 변환시켜주는 함수
 */
export function formatDateWithDay(targetDate: string | undefined, time: boolean = true, alternativeText: string = '') {
  if (!targetDate) return alternativeText;
  const date = dayjs(targetDate).locale('ko');
  const day = date.day();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][day];
  return date.format(`YYYY.MM.DD(${dayOfWeek}) ${time ? `${date.format('HH:mm')}` : ''}`);
}
