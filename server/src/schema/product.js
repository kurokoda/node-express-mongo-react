const mongoose         = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// TODO add type precision

const Schema = new mongoose.Schema({
    sku        : {
      type    : String,
      required: true,
      unique  : true,
    },
    name       : {
      type    : String,
      required: true,
    },
    imageURL   : {
      type    : String,
      required: true,
    },
    description: {
      type    : String,
      required: true,
    },
    price      : {
      type    : Number,
      required: true,
    },
    type       : {
      type    : String,
      required: true,
    },
    keywords   : {
      type   : Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

Schema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', Schema);
export default Product;