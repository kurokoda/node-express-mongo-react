import Product from '../../schema/product';

export const seed = () => {

  const products = [
    {
      sku        : 'AMT001',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT002',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT003',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT004',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT005',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT006',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT007',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT008',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT009',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT010',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT011',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
    {
      sku        : 'AMT012',
      name       : 'Hail Satan T-Shirt',
      imageURL   : 'http://blackhopecurse.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/ruins_t-shirt_web.png',
      description: 'A T-shirt that\'s all about hailing Satan',
      price      : '6.66',
      type       : 'shirt',
      keywords   : ['adult', 'male', 'shirt', 'tee', 'satan'],
    },
  ];

  return Product.remove({})
  .then(() => {
    return products.map(product => {
      return Product.create(product);
    });
  })
  .then((productPromises) => {
    return Promise.all(productPromises);
  })
  .then((results) => {
    console.log('Products created: ', results);
    return Promise.resolve(results);
  })
  .catch((error) => {
    return Promise.reject({error});
  });
};
