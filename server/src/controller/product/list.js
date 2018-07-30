import Product from '../../schema/product';

export const list = (req, res) => {
  console.log('HERE I AM')

  return Product.find({})
  .then((products) => {
    res.status(200).send({products});
    return Promise.resolve({products})
  })
  .catch((error) => {
    res.status(500).send({error});
    return Promise.reject({error})
  });
};
