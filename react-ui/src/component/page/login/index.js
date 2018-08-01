import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import Form from './form';

export default class Login extends Component {
  render() {
    const styles = Login.getStyles();

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
    const {userLogin} = this.props;
    userLogin(
      config,
      result => console.log('User login success'),
      error => console.log('User login error', error),
    );
  }
}

Login.getStyles = (config) => {
  return StyleSheet.create({
    container: {}
  })
};
