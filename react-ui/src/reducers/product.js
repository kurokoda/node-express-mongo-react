import actions from '../actions';

const defaultState = null;

export default (state = defaultState, action) => {

  const {
          GET_PRODUCT_SUCCESS
        } = actions.product;

  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return action.response.product;
    default:
      return state;
  }
}