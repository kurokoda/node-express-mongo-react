import actions from '../actions';

const defaultState = null;

export default (state = defaultState, action) => {

  const {
          GET_PRODUCTS_SUCCESS
        } = actions.product;

  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.response.products;
    default:
      return state;
  }
}