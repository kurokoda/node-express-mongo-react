import User from '../../schema/user';

export const login = (req, res) => {
  User.authenticate(req.body.email, req.body.password)
  .then((user) => {
    if (user) {
      req.session.user = user;
      res.status(200).send({user});
    } else {
      res.status(404).send('user not found');
    }
  })
  .catch((error) => {
    res.status(500).send(error);
  });
};