import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import Form from './form';

export default class Signup extends Component {
  render() {
    const styles = Signup.getStyles();

    return (
      <div
        className={css(styles.container)}
        id='signup-component'
      >
        <Form onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }

  onSubmit(config) {
    const {userSignup} = this.props;
    userSignup(
      config,
      result => console.log('User signup success'),
      error => console.log('User signup error', error),
    );
  }
}

Signup.getStyles = (config) => {
  return StyleSheet.create({
    container: {}
  })
};
