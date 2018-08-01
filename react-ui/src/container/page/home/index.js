import {connect} from 'react-redux';
import Home from '../../../component/page/home';
import {modalShow} from '../../../actions/application';

export function mapStateToProps(state) {
  return {
    application: state.application,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    modalShow: (config) => dispatch(modalShow(config)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
