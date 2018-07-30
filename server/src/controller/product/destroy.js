import Product from '../../schema/product';

export const destroy = (req, res) => {
  return Product.findOneAndRemove({
    sku: req.params.sku,
  })
  .then(() => {
    res.status(200).send();
    return Promise.resolve()
  })
  .catch((error) => {
    res.status(500).send({error});
    return Promise.reject({error})
  });
};
