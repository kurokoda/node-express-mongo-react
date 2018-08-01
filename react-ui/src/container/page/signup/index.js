import {connect} from 'react-redux';
import {userSignup} from '../../../actions/auth';
import Signup from '../../../component/page/signup';

export function mapStateToProps({application}) {
  return {application};
}

export function mapDispatchToProps(dispatch) {
  return {
    userSignup: (config, onSuccess, onError) => dispatch(userSignup(config, onSuccess, onError)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
