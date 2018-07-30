import Product from '../../schema/product';

export const read = (req, res) => {
  return Product.findOne({
    sku: req.params.sku,
  })
  .then((product) => {
    res.status(200).send({product});
    return Promise.resolve({product})
  })
  .catch((error) => {
    res.status(500).send({error});
    return Promise.reject({error})
  });
};