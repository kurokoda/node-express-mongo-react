import {connect} from 'react-redux';
import {getProducts} from '../../../actions/product';

import Products from '../../../component/page/products';

export function mapStateToProps({application, products}) {
  return {
    application,
    products
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getProducts: (config) => dispatch(getProducts(config)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
