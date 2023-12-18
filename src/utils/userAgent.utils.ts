import { BrowserType, OsType } from '../constants/userAgent.constant';

export const currentAgentIs = (agent: BrowserType | OsType) => {
  const userAgent = navigator.userAgent;
  return new RegExp(agent, 'gi').test(userAgent);
};
