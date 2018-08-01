import React from 'react';
import {Button} from 'react-bootstrap';

export default (props) => {
  const {modalHide, application} = props;
  const title                    = application.modal.title;

  return (
    <div style={styles.container}>
      { title && (
        <h4 style={styles.text}>
          {title.toUpperCase()}
        </h4>
      )}
      <Button
        bsSize="xs"
        bsStyle="danger"
        style={{
          position: 'absolute',
          right   : '0',
          top     : '8px',
        }}
        onClick={modalHide}>
        <i className="fas fa-times"/>
      </Button>
    </div>
  )
}

const styles = {
  container: {
    display       : 'flex',
    position      : 'relative',
    justifyContent: 'center',
  },
  text     : {
    color: '#666'
  },
};