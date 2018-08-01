import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    const styles = getStyles();

    return (
      <div className={css(styles.headerContainer)}>
        <Link className={css(styles.link)} to="/">HOME</Link>
        <Link className={css(styles.link)} to="/products">PRODUCTS</Link>
        <Link className={css(styles.link)} to="/signup">SIGNUP</Link>
        <Link className={css(styles.link)} to="/login">LOGIN</Link>
        <Link className={css(styles.link)} to="/authExample">AUTH EXAMPLE</Link>
      </div>
    );
  }
}

const getStyles = (config) => {
  return StyleSheet.create({
    headerContainer: {
      display        : 'flex',
      alignItems     : 'center',
      height         : '60px',
      backgroundColor: '#333',
      padding: '0 20px 0 20px'
    },
    link           : {
      margin: '0 20px 0 0'
    },
  })
};

export default Header;