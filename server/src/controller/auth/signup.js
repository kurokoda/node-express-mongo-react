import User from '../../schema/user';

export const signup = (req, res) => {
  const userData = {
    firstName: req.body.firstName,
    lastName : req.body.lastName,
    email    : req.body.email,
    username : req.body.username,
    password : req.body.password,
  };
  return User.create(userData)
  .then(() => {
    return User.findOne({email: userData.email});
  })
  .then((user) => {
    return User.authenticate(user.email, 'password')
  })
  .then((user) => {
    user ?
      res.status(200).send(JSON.stringify(user)) :
      res.status(404).send('User was not created') ;
    return Promise.resolve(user);
  })
  .catch((error) => {
    res.status(500).send(error.message);
    return Promise.reject(new Error(error.message));
  });
};