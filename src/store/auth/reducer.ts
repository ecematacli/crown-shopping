import { ActionTypes, AuthAction } from './actionTypes';

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

const initialState = {
  token: null,
  authenticated: false,
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionTypes.setToken:
      console.log('set token payload', action.payload);
      return {
        authenticated: true,
        token: action.payload,
      };
    case ActionTypes.clearAuthentication:
      return {
        token: null,
        authenticated: false,
      };
    case ActionTypes.setAuthenticated:
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

