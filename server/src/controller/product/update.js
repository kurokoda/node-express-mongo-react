import Product from '../../schema/product';

export const update = (req, res) => {
  return Product.findOne({
   sku: req.body.sku,
  })
  .then((product) => {
    return product.update(req.body);
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