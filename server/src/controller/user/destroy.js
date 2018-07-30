import User from '../../schema/user';
import { noAuth, handleError,  handleSuccess} from '../../service/api';

export default (req, res) => {
  if (!req.session.user) {
    return noAuth(req, res);
  }

  return User.findOneAndRemove({
    userID: req.params.id,
  })
  .then(() => {
    return handleSuccess(req, res);
  })
  .catch((error) => {
    return handleError(req, res, error);
  });
};
