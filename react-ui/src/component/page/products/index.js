import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Products extends Component {

  componentDidMount() {
    const {getProducts} = this.props;

    getProducts();
  }

  render() {
    const {products} = this.props;
    const styles     = Products.getStyles();

    return (
      <div
        className={css(styles.container)}
        id='example-component'
      >
        {
          products && (
            products.map((product, index) => {
              const {imageURL, sku} = product;
              return (
                <div
                  className={css(styles.product)}
                  key={index}
                  onClick={() => {
                    this.onProductClick({sku})
                  }}
                >
                  <img
                    className={css(styles.image)}
                    src={imageURL}
                  />
                  <div>
                    {product.name}
                  </div>
                  <div>
                    {`£${product.price}`}
                  </div>
                </div>
              )
            })
          )
        }
      </div>
    );
  }

  onProductClick(data) {
    const {history} = this.props;

    history.push(`/product?sku=${data.sku}`);
  }
}

Products.getStyles = (config) => {
  return StyleSheet.create({
    container: {},
    image    : {
      width: '100%'
    },
    product  : {
      display  : 'inline-block',
      cursor   : 'pointer',
      textAlign: 'center',
      padding  : '20px',
      width    : '33%',

      '@media (max-width: 600px)': {
        width: '50%',
      },

      '@media (max-width: 420px)': {
        width: '100%',
      },
    },
  })
}

export default withRouter(Products);