import cookie from 'js-cookie';

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
