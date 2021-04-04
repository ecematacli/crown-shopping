export interface CountryCookie {
  name: string;
  code: string;
  currency: string;
  locale: string;
  language: string;
}

export interface AuthTokenCookie {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: number;
  scope: string;
  token_type: 'Bearer';
}
