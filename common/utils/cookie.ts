import cookie from 'js-cookie';
import cookieParser from 'cookie';
import { IncomingHttpHeaders } from 'http2';
import { CountryCookie } from '../../types/cookie';

type Country = (reqHeaders: IncomingHttpHeaders) => CountryCookie | null;
type Auth = (reqHeaders: IncomingHttpHeaders) => string | null;

export const getCookie = (key: string) => {
  try {
    return cookie.getJSON(key);
  } catch (err) {
    return undefined;
  }
};

export const setCookie = (key: string, value: any) => {
  try {
    cookie.set(key, value);
  } catch (err) {
    // Don't do anything
  }
};

export const clearCookie = (key: string) => {
  try {
    cookie.remove(key);
  } catch (err) {
    // Don't do anything
  }
};

export const getCountryCookie: Country = (reqHeaders: IncomingHttpHeaders) => {
  const country = cookieParser.parse(reqHeaders?.cookie || '')?.country;
  return country ? JSON.parse(country) : null;
};

export const getAuthCookie: Auth = (reqHeaders: IncomingHttpHeaders) => {
  const auth = cookieParser.parse(reqHeaders?.cookie || '')?.auth;
  return auth ? JSON.parse(auth)?.access_token : null;
};
