import { AuthState } from './auth/types'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('auth');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) 
  } catch(err) {
    return undefined;
  }
}

export const saveState = (state: AuthState) => {
  console.log(state, 'state')
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('auth', serializedState)
  } catch(err) {
    // Don't do anything
  }
}