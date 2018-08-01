import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Modal from 'react-modal';
import asyncComponent from '../../../codeSplitting/AsyncComponent';
import Header from './header';

class ModalComponent extends Component {

  render() {
    const {application, modalHide} = this.props;

    if (!application.modal) return <div/>;

    const modal   = application.modal;
    const Content = this.getContent(modal.component);
    const title   = modal.title;

    return (
      <div style={styles.container}>
        <Modal
          isOpen={Boolean(modal)}
          onAfterOpen={modal.onAfterOpen}
          onRequestClose={modal.onRequestClose}
          style={modal.styles || styles}
          contentLabel={modal.contentLabel}>
          <Header
            application={application}
            modalHide={modalHide}/>
          <Content/>
        </Modal>
      </div>
    );
  }

  getContent(type) {
    switch (type) {
      case 'no-button' :
        return asyncComponent(() => import("./content/ModalContentNoButton"));
      default :
        throw new Error('No modal contant available');
    }
  }
}

Modal.setAppElement('#root');

ModalComponent.propTypes = {
  'config': PropTypes.object,
};

export default ModalComponent;

const styles = {
  container: {
    position: 'relative',
  },
  overlay  : {
    backgroundColor: 'rgba( 0, 0, 0, 0.5)',
    zIndex         : '1000',
  },
  content  : {
    top        : '50%',
    left       : '50%',
    right      : 'auto',
    bottom     : 'auto',
    marginRight: '-50%',
    transform  : 'translate(-50%, -50%)',
  },
};