import {
  handleError,
  handleSuccess
} from '../../service/api';

export const logout = (req, res) => {
  console.log('in the pipe 5x5')
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        handleError(req, res, error);
      } else {
        handleSuccess(req, res);
      }
    });
  } else {
    handleSuccess(req, res);
  }
};