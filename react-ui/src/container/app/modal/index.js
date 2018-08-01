import {connect} from 'react-redux';
import Modal from '../../../component/app/modal';
import actions from '../../../actions';

export function mapStateToProps({application}) {
  return {application};
}

export function mapDispatchToProps(dispatch) {
  return {
    modalHide: () => dispatch(actions.application.modalHide()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
