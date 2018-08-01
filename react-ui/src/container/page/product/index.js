import {connect} from 'react-redux';
import {addItemToCart} from '../../../actions/cart';
import {getProduct} from '../../../actions/product';
import Product from '../../../component/page/product';

export function mapStateToProps({application, product}) {
  return {
    application,
    product
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getProduct   : (config) => dispatch(getProduct(config)),
    addItemToCart: (config) => dispatch(addItemToCart(config)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
