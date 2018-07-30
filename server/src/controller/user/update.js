import User from '../../schema/user';
import { noAuth, handleError,  handleSuccess} from '../../service/api';

export default (req, res) => {
  if (!req.session.user) {
    return noAuth(req, res);
  }
  return User.findOne({
    _id: req.body.id,
  })
  .then((user) => {
    return user.update(req.body);
  })
  .then((user) => {
    return handleSuccess(req, res, {user: user});
  })
  .catch((error) => {
    return handleError(req, res, error);
  });
};