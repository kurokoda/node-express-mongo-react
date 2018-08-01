import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import {
  persistCombineReducers,
  persistStore
} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import ReduxDevTools from '../component/dev/ReduxDevTools';
import api from '../middleware/api';
import reducers from '../reducers';

const configureStore = () => {
  const persistConfig = {
    blacklist : ['application'],
    key       : 'root',
    storage,
    transforms: [immutableTransform()],
    whitelist : ['user'],
  };
  const rootReducer   = persistCombineReducers(persistConfig, reducers);
  const middleware    = [
    thunk,
    api
  ];
  const store         = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      ReduxDevTools.instrument()
    )
  );
  const getState      = () => {
    store.getState();
  };
  const persistor     = persistStore(store, null, getState);

  return {
    persistor,
    store,
  };
};

export default configureStore;
