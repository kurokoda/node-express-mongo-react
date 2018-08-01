import actions from '../actions';

const defaultState = {
  modal: null,
};

export default (state = defaultState, action) => {

  const {
          MODAL_SHOW,
          MODAL_HIDE,
          SERVER_PING_SUCCESS
        } = actions.application;

  switch (action.type) {
    case MODAL_SHOW:
      return Object.assign({}, state, {modal: action.config});
    case MODAL_HIDE:
      return Object.assign({}, state, {modal: null});
    case SERVER_PING_SUCCESS:
      return state;
    default:
      return state;
  }
}