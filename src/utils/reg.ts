/* hex validation */
export const hexRegex = (value: string) => /^#?([a-fA-F0-9]{6})$/.test(value);

/* 숫자검출 정규식 */
export const isNumberReg = (value: string) => {
  return /^[0-9]+$/.test(value);
};

/* http, https ~ 정규식 */
export const isHttpReg = (value: string) => /(http(s)?:\/\/)/gi.test(value);

export const isIncludeProtocolReg = (value: string) =>
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(value);

/* 한글 정규식 */
export const isKorReg = (value: string) => {
  return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value);
};

/* 이메일 정규식 */
export const isEmailReg = (value: string) => {
  return /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
};
