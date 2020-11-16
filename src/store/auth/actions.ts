import { Dispatch } from 'redux';
import {
  ActionTypes,
  SetTokenAction,
  SetAuthenticated,
  ClearAuthAction,
  Token,
} from './types';

export const setToken = (token: Token) => (dispatch: Dispatch) => {
  console.log('token in setToken ACTION', token)
  dispatch<SetTokenAction>({
    type: ActionTypes.setToken,
    payload: token,
  });
};

export const setAuthenticated = (isAuthenticated: boolean) => (
  dispatch: Dispatch
) => {
  dispatch<SetAuthenticated>({
    type: ActionTypes.setAuthenticated,
    payload: isAuthenticated,
  });
};

export const clearAuthentication = () => (dispatch: Dispatch) => {
  dispatch<ClearAuthAction>({
    type: ActionTypes.clearAuthentication,
  });
};
