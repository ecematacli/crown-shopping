export interface AuthState {
  token: Token;
  authenticated: boolean;
}

export interface Token {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: number;
  scope: string;
  token_type: 'Bearer';
}

export enum ActionTypes {
  setToken = 'SET_TOKEN',
  clearAuthentication = 'CLEAR_AUTHENTICATION',
  setAuthenticated = 'SET_AUTHENTICATED',
}

export interface SetTokenAction {
  type: ActionTypes.setToken;
  payload: Token; 
}

export interface ClearAuthAction {
  type: ActionTypes.clearAuthentication;
}

export interface SetAuthenticated {
  type: ActionTypes.setAuthenticated;
  payload: boolean;
}

export type AuthAction = SetTokenAction | ClearAuthAction | SetAuthenticated;
