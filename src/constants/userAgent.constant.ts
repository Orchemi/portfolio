export const BROWSER = {
  EDGE: 'EDGE',
  WHALE: 'WHALE',
  CHROME: 'CHROME',
  SAFARI: 'SAFARI',
  FIREFOX: 'FIREFOX',
  EXPLORER: 'EXPLORER',
} as const;
export type BrowserType = keyof typeof BROWSER;

export const OS = {
  MAC: 'MAC',
  WIN: 'WIN',
  LINUX: 'LINUX',
} as const;
export type OsType = keyof typeof OS;
