import Product from '../../schema/product';

export const create = (req, res) => {

  const productData = {
    sku        : req.body.sku,
    name       : req.body.name,
    description: req.body.description,
    price      : req.body.price,
    type       : req.body.type,
    keywords   : req.body.keywords,
    department : req.body.department,
  };
  return Product.create(productData)
  .then((product) => {
    res.status(200).send({product});
    return Promise.resolve({product})
  })
  .catch((error) => {
    res.status(500).send({error});
    return Promise.reject({error})
  });
};
