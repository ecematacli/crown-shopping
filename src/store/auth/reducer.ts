import { ActionTypes, AuthAction, AuthState } from './types';


const initialState = {
  token: null,
  authenticated: false,
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionTypes.setToken:
      console.log('payload REDUCER', action.payload)
      console.log('return from REDUCER>>', {
        ...state,
         token: action.payload,
       })
      return {
       ...state,
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

