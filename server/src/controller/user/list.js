import _ from 'lodash';
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
  return User.find({})
  .then((users) => {
    return handleSuccess(req, res, {users, users});
  })
  .catch((error) => {
    return handleError(req, res, error);
  });
};
