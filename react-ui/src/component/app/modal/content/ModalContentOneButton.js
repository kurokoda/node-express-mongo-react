import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {Button, View} from '../../viewProxies';

export default (props) => {

  const {buttonConfig} = props;

  return (
    <View>
      <View className={css(styles.content)}>
        {props.text}
      </View>
      <View className={css(styles.centerContent)}>
        <Button
          bsStyle={buttonConfig.bsStyle}
          onClick={buttonConfig.onClick}
          text={buttonConfig.text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content      : {
    display       : 'flex',
    width         : '340px',
    minHeight     : '200px',
    justifyContent: 'center',
    alignItems    : 'center',
  },
  centerContent: {
    textAlign: 'center',
  }
});