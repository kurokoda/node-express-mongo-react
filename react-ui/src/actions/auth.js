import {CALL_API} from '../middleware/api';

export const USER_SIGNUP_SUCCESS = Symbol('USER_SIGNUP_SUCCESS');
export const USER_LOGIN_SUCCESS  = Symbol('USER_LOGIN_SUCCESS');
export const USER_LOGOUT_SUCCESS = Symbol('USER_LOGOUT_SUCCESS');

export function userLogin(body, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      afterError,
      afterSuccess,
      body,
      method     : 'post',
      path       : `/auth/login`,
      successType: USER_LOGIN_SUCCESS,
      errorType  : null
    }
  };
}

export function userLogout(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      afterError,
      afterSuccess,
      method     : 'get',
      path       : `/auth/logout`,
      successType: USER_LOGOUT_SUCCESS,
      errorType  : null
    }
  };
}

export function userSignup(body, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      afterError,
      afterSuccess,
      body,
      method     : 'post',
      path       : `/auth/signup`,
      successType: USER_SIGNUP_SUCCESS,
      errorType  : null
    }
  };
}
