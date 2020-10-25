import { ActionTypes, AuthAction } from './types';

interface State {
  token: any;
  authenticated: boolean;
}
const initialState = {
  token: null,
  authenticated: false,
};

const authReducer = (state: State = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionTypes.setToken:
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
