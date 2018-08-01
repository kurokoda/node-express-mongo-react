import actions from '../actions';

const defaultState = {
  user: null,
};

export default (state = defaultState, action) => {

  const {
          USER_LOGIN_SUCCESS,
          USER_LOGOUT_SUCCESS,
        } = actions.auth;

  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {user: action.response.user});
    case USER_LOGOUT_SUCCESS:
      return Object.assign({}, state, {user: null});
    default:
      return state;
  }
}