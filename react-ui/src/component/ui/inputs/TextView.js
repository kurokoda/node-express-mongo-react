import PropTypes from 'prop-types';
import React from 'react';

export default class TextView extends React.Component {

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.text}
          onChange={this.props.onFieldChanged}/>
        <div className={'validation-error ' + (this.props.showError ? 'show' : 'hidden')}>
          <span className="text">
            {this.props.errorText}
            </span>
        </div>
      </div>
    );
  }
}

TextView.propTypes = {
  showError     : PropTypes.bool.isRequired,
  onFieldChanged: PropTypes.func.isRequired
};
