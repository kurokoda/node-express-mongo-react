import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';

class Home extends Component {

  render() {
    const styles = Home.getStyles();

    return (
      <div
        onClick={() => {
          const {modalShow} = this.props;

          modalShow({
            component: 'no-button',
            title    : 'example',
          })
        }}
        className={css(styles.container)}
        id='home-component'
      >
        HOME
      </div>
    );
  }
}

Home.getStyles = (config) => {
  return StyleSheet.create({
    container: {
      color: 'blue'
    }
  })
}

export default Home;
