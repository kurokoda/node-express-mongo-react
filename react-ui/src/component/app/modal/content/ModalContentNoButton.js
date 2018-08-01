import {
  css,
  StyleSheet
} from 'aphrodite';
import React from 'react';

export default (props) => {

  return (
    <div>
      <div className={css(styles.content)}>
        {props.text}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  content: {
    display       : 'flex',
    width         : '340px',
    minHeight     : '200px',
    justifyContent: 'center',
    alignItems    : 'center',
  }
});