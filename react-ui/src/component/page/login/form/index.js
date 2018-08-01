import {
  css,
  StyleSheet
} from 'aphrodite';
import _ from 'lodash';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Validation from '../../../../validation/index';
import {
  minLength,
  required
} from '../../../../validation/rules';
import {
  EmailInput,
  TextInput
} from '../../../ui/inputs';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange     = this.onChange.bind(this);

    this.fieldValidations = [
      Validation.set('email', 'Email', required, minLength(3)),
      Validation.set('password', 'Password', required, minLength(3)),
    ];

    this.state = {
      showErrors      : false,
      validationErrors: {},
      email           : 'hail@satan.com',
      password        : 'password',
    };
  }

  componentWillMount() {
    this.setState({
      validationErrors: Validation.run(this.state, this.fieldValidations)
    });
  }

  render() {
    return (
      <form autoComplete='off' className={css(styles.content)} onSubmit={this.handleSubmit}>
        <div style={{textAlign: 'center'}}>
          <h3>
            USER LOGIN
          </h3>
        </div>
        <EmailInput value={this.state.email}
                    onChange={this.onChange}
                    showError={this.state.showErrors}
                    errorText={this.getErrorFor('email')}
                    label='Email'
                    autoComplete='off'
                    id='email'/>
        <TextInput value={this.state.password}
                   onChange={this.onChange}
                   showError={this.state.showErrors}
                   errorText={this.getErrorFor('password')}
                   label='Password'
                   autoComplete='off'
                   id='password'/>
        <p>
          <Button
            className='btn-block'
            bsStyle='success'
            type='submit'>
            SUBMIT
          </Button>
        </p>
      </form>
    );
  }

  getErrorFor(field) {
    return this.state.validationErrors[field];
  }

  onChange(event) {
    event.preventDefault();
    let newState              = Object.assign({}, this.state, {
      [event.target.id]: event.target.value
    });
    newState.validationErrors = Validation.run(newState, this.fieldValidations);
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({showErrors: true});
    if (!_.isEmpty(this.state.validationErrors)) return null;
    this.props.onSubmit(
      {
        email   : this.state.email,
        password: this.state.password,
      }
    );
  }
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

// Styles -------------------------------------------------------------

const styles = StyleSheet.create({
  content: {
    width : '420px',
    margin: 'auto',
  },
});

export default withRouter(LoginForm);
