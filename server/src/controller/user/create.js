import User from '../../schema/user';
import {
  handleError,
  handleSuccess
} from '../../service/api';

export default (req, res) => {

  const userData = {
    name  : req.body.name,
  };
  return User.create(userData)
  .then((user) => {
    return handleSuccess(req, res, {user: user});
  })
  .catch((error) => {
    return handleError(req, res, error);
  });
};
