import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import actions from './actions';
import ReduxDevTools from './component/dev/ReduxDevTools';
import Body from './container/app/body';
import Footer from './container/app/footer';
import Header from './container/app/header';
import Modal from './container/app/modal';

class App extends Component {

  async componentDidMount() {
    const {pingServer} = this.props;

    pingServer(
      result => console.log('Ping server success'),
      error => console.log('Ping server error', error),
    );
  }

  render() {
    return (
      <Router>
        <main>
          <Header {...this.props}/>
          <Body {...this.props}/>
          <Footer {...this.props}/>
          <Modal {...this.props}/>
          { false && <ReduxDevTools/>}
        </main>
      </Router>
    );
  }
}

export function mapStateToProps({application}) {
  return {
    application,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    pingServer: (config) => dispatch(actions.application.pingServer(config)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
