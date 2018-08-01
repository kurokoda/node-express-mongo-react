import {connect} from 'react-redux';
import {userLogout} from '../../../actions/auth';
import AuthExample from '../../../component/page/authExample';

export function mapStateToProps({auth}) {
  return {auth};
}

export function mapDispatchToProps(dispatch) {
  return {
    userLogout: (config) => dispatch(userLogout(config)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthExample);
