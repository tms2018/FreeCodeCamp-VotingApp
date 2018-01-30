export const LOGGED_IN = 'LOGGED_IN'
export const LOGGED_OUT = 'LOGGED_OUT'
export const REDIRECTED = 'REDIRECTED'
export const CLEAR_REDIRECT = 'CLEAR_REDIRECT'

export interface Action {
  type: string
  payload?: any
}

export function logIn(email: string) {
  return {
    type: LOGGED_IN,
    payload: email
  }
}

export function logOut() {
  return {
    type: LOGGED_OUT,
  }
}

// if more router functionality is added to redux, this will move
// to a separate file
export function redirected(path: string) {
  return {
    type: REDIRECTED,
    payload: path
  }
}

export function clearRedirect() {
  return {
    type: CLEAR_REDIRECT
  }
}