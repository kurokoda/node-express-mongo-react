import {connect} from 'react-redux';
import {userLogin} from '../../../actions/auth';
import Login from '../../../component/page/login';

export function mapStateToProps({application}) {
  return {application};
}

export function mapDispatchToProps(dispatch) {
  return {
    userLogin: (config, onSuccess, onError) => dispatch(userLogin(config, onSuccess, onError)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
