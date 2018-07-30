import User from '../../schema/user';

import {
  handleError,
  handleSuccess,
  noAuth
} from '../../service/api';

export default (req, res) => {
  if (!req.session.user) {
    return noAuth(req, res);
  }
  return User.findOne({
    _id: req.params.id,
  })
  .then((user) => {
    return handleSuccess(req, res, {user: user});
  })
  .catch((error) => {
    return handleError(req, res, error);
  });
};