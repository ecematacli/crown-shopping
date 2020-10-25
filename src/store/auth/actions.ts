import { Dispatch } from 'redux';
import {
  ActionTypes,
  SetTokenAction,
  SetAuthenticated,
  ClearAuthAction,
} from './types';

export const setToken = (token: any) => (dispatch: Dispatch) => {
  dispatch<SetTokenAction>({
    type: ActionTypes.setToken,
    payload: token,
  });
};

export const setAuthenticated = (authenticated: boolean) => (
  dispatch: Dispatch
) => {
  dispatch<SetAuthenticated>({
    type: ActionTypes.setAuthenticated,
    payload: authenticated,
  });
};

export const clearAuthentication = () => (dispatch: Dispatch) => {
  dispatch<ClearAuthAction>({
    type: ActionTypes.clearAuthentication,
  });
};
