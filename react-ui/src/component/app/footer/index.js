import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';

class Footer extends Component {

  render() {
    const styles = getStyles();

    return (
      <div className={css(styles.footerContainer)}>
        copyright 2018
      </div>
    );
  }
}

const getStyles = (config) => {
  return StyleSheet.create({
    footerContainer: {
      display        : 'flex',
      color          : '#FFF',
      alignItems     : 'center',
      height         : '60px',
      backgroundColor: '#333',
      padding        : '0 20px 0 20px'
    },
  })
};

export default Footer;