export enum ActionTypes {
  setToken = 'SET_TOKEN',
  clearAuthentication = 'CLEAR_AUTHENTICATION',
  setAuthenticated = 'SET_AUTHENTICATED',
}

export interface SetTokenAction {
  type: ActionTypes.setToken;
  payload: any; // Revisit
}

export interface ClearAuthAction {
  type: ActionTypes.clearAuthentication;
}

export interface SetAuthenticated {
  type: ActionTypes.setAuthenticated;
  payload: boolean;
}

export type AuthAction = SetTokenAction | ClearAuthAction | SetAuthenticated;
