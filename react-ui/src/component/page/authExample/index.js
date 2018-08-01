import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class AuthExample extends Component {

  render() {

    const {userLogout} = this.props;
    const {user}       = this.props.auth;
    const styles       = AuthExample.getStyles();

    if (!user) {
      return <Redirect to='/'/>
    }
    return (
      <div
        className={css(styles.container)}
        id='auth-example-component'
      >
        AuthExample
        <div onClick={userLogout}>LOGOUT</div>
      </div>
    );
  }
}

AuthExample.getStyles = (config) => {
  return StyleSheet.create({
    container: {
      color: 'green'
    }
  })
}

export default AuthExample;