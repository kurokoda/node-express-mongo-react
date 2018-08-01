import {CALL_API} from '../middleware/api';

export const SERVER_PING_SUCCESS = Symbol('SERVER_PING_SUCCESS');
export const MODAL_SHOW          = Symbol('MODAL_SHOW');
export const MODAL_HIDE          = Symbol('MODAL_HIDE');

export function modalShow(config) {
  const type = MODAL_SHOW;
  return {
    type,
    config,
  }
}

export function modalHide(config) {
  const type = MODAL_HIDE;
  return {
    type,
    config,
  }
}

export function pingServer(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/app/ping`,
      successType: SERVER_PING_SUCCESS,
      errorType  : null,
      afterSuccess,
      afterError
    }
  };
}