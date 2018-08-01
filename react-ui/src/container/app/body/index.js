import {
  css,
  StyleSheet
} from 'aphrodite';
import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import asyncComponent from '../../../codeSplitting/AsyncComponent';
import LAYOUT from '../../../constants/layout';

class Body extends Component {

  render() {
    const config = {
      headerHeight: LAYOUT.HEADER_HEIGHT,
      footerHeight: LAYOUT.FOOTER_HEIGHT,
    };
    const styles = getStyles(config);

    const {props} = this;
    return (
      <div className={css(styles.bodyContainer)}>
        <Switch>
          <Route
            path="/"
            exact
            component={asyncComponent(() => import("../../page/home"))}
            props={props}
          />
          <Route
            path="/product"
            exact
            component={asyncComponent(() => import("../../page/product"))}
            props={props}
          />
          <Route
            path="/products"
            exact
            component={asyncComponent(() => import("../../page/products"))}
            props={props}
          />
          <Route
            path="/signup"
            exact
            component={asyncComponent(() => import("../../page/signup"))}
            props={props}
          />
          <Route
            path="/login"
            exact
            component={asyncComponent(() => import("../../page/login"))}
            props={props}
          />
          <Route
            path="/authExample"
            exact
            component={asyncComponent(() => import("../../page/authExample"))}
            props={props}
          />
        </Switch>
      </div>
    );
  }
}

const getStyles = (config) => {
  return StyleSheet.create({
    bodyContainer: {
      minHeight: `calc(100vh - ${config.headerHeight + config.footerHeight}px)`,
    },
  })
};

export default Body
