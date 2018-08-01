import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Loading from './component/app/loading';
import App from './app';
import './index.css';
import {register as registerServiceWorker} from './serviceWorker';
import configureStore from './store';

const {persistor, store} = configureStore();
const rootElement        = document.getElementById('root');
const RootComponent      = () => (
  <Provider store={store}>
    <PersistGate
      loading={<Loading/>}
      persistor={persistor}
    >
      <App/>
    </PersistGate>
  </Provider>
);

console.log('REACT_APP_NIGHTCRAWLER_API_BASE_URL', process.env.REACT_APP_NIGHTCRAWLER_API_BASE_URL)

ReactDOM.render(<RootComponent/>, rootElement);

registerServiceWorker();
