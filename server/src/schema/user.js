const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

// TODO add type precision

const Schema = new mongoose.Schema({
    firstName: {
      type    : String,
      required: true,
    },
    lastName : {
      type    : String,
      required: true,
    },
    username : {
      type    : String,
      required: true,
    },
    password : {
      type    : String,
      required: true,
    },
    email    : {
      type    : String,
      required: true,
      unique  : true,
    },
  },
  {
    timestamps: true,
  }
);

Schema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

Schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.v;
  return obj;
};

Schema.statics.authenticate = function (email, password) {
  let user;

  return User.findOne({email: email})
  .then((result) => {
    user = result;
    console.log(password, user.password)
    return bcrypt.compare(password, user.password);
  })
  .then((result) => {
    console.log('result', result)
    return result ? user : null;
  })
  .catch((error) => {
    console.log(error);
  })
};

const User = mongoose.model('User', Schema);
export default User;