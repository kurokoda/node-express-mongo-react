export const ADD_ITEM_TO_CART = Symbol('GET_PRODUCTS_SUCCESS');

export function addItemToCart(payload) {
  return {
    type: ADD_ITEM_TO_CART,
    payload
  }
}
