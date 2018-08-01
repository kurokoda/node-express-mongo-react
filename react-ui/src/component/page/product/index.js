import {
  css,
  StyleSheet
} from 'aphrodite';
import queryString from 'qs';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Product extends Component {

  componentDidMount() {
    const {getProduct} = this.props;
    const sku          = queryString.parse(window.location.search.slice(1)).sku;

    getProduct({sku});
  }

  render() {
    const {product} = this.props;
    const styles    = Product.getStyles();

    if (!product) {
      return null;
    }

    return (
      <div
        className={css(styles.container)}
        id='example-component'
      >
        <div
          className={css(styles.section)}
        >
          <a
            href={product.imageURL}
            className="MagicZoom"
            data-options="zoomMode: magnifier; expand: off"
          >
            <img
              className={css(styles.image)}
              src={product.imageURL}
            />
          </a>
          <img
            className={css(styles.image)}
            src={product.imageURL}
          />
        </div>
        <div
          className={css(styles.section)}
        >
          <div>
            {product.name}
          </div>
          <div>
            {`£${product.price}`}
          </div>
          <Button
            block
            onClick={() => {
              this.onAddToCartClick({product})
            }}
          >
            ADD TO CART
          </Button>
          <Button
            block
            onClick={() => {
              this.onAddToWishlistClick({product})
            }}
          >
            ADD TO WISHLIST
          </Button>
        </div>
      </div>
    );
  }
}

Product.getStyles = (config) => {
  return StyleSheet.create({
    container: {},
    image    : {
      width: '100%'
    },
    section  : {
      display      : 'inline-block',
      padding      : '20px',
      width        : '50%',
      verticalAlign: 'top',

      '@media (max-width: 600px)': {
        width: '100%',
      }
    },
  })
}

export default Product;