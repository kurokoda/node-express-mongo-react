import actions from '../actions';

const defaultState = null;

export default (state = defaultState, action) => {

  const {
          ADD_ITEM_TO_CART
        } = actions.cart;

  switch (action.type) {
    case ADD:
      return action.response.product;
    default:
      return state;
  }
}