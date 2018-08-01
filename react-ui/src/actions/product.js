import {CALL_API} from '../middleware/api';

export const GET_PRODUCTS_SUCCESS = Symbol('GET_PRODUCTS_SUCCESS');
export const GET_PRODUCT_SUCCESS = Symbol('GET_PRODUCT_SUCCESS');


export function getProduct(data, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/product/${data.sku}`,
      successType: GET_PRODUCT_SUCCESS,
      errorType  : null,
      afterSuccess,
      afterError
    }
  };
}

export function getProducts(afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/product`,
      successType: GET_PRODUCTS_SUCCESS,
      errorType  : null,
      afterSuccess,
      afterError
    }
  };
}