import Promise from 'bluebird';
import {camelizeKeys} from 'humps';
import superAgent from 'superagent';

export const CALL_API  = Symbol('CALL_API');
export const CHAIN_API = Symbol('CHAIN_API');

const agent = superAgent.agent();

export default ({dispatch, getState}) => (next) => (action) => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [
        () => action
      ]
    });
  }

  return new Promise(function (resolve, reject) {
    if (!action[CHAIN_API]) {
      return next(action);
    }

    const promiseCreators = action[CHAIN_API].map((actionCreator) => {
      return createRequestPromise(actionCreator, getState, dispatch);
    });

    const overall = promiseCreators.reduce((promise, creator) => {
      return promise.then((body) => {
        return creator(body);
      });
    }, Promise.resolve());

    overall.finally(() => {
      return resolve();
    })
    .catch((error) => {
      return reject(new Error(error));
    });
  });
};

function actionWith(action, toMerge) {
  const ret = Object.assign({}, action, toMerge);
  delete ret[CALL_API];
  return ret;
}

function createRequestPromise(actionCreator, getState, dispatch) {
  let params;
  return (prevBody) => {
    const action = actionCreator(prevBody);
    return new Promise(function (resolve, reject) {

      const handleError = (error) => {
        if (params.errorType) {
          dispatch(actionWith(action, {
            type : params.errorType,
            error: error
          }));
        }

        if (typeof params.afterError === 'function') {
          params.afterError({getState});
        }
        return reject(new Error(error));
      };

      const handleSuccess = (res) => {
        // Handle success
        const resBody = camelizeKeys(res.body);
        dispatch(actionWith(action, {
          type    : params.successType,
          response: resBody
        }));

        if (typeof params.afterSuccess === 'function') {
          params.afterSuccess({getState});
        }
        return resolve(resBody);
      };

      if (!action[CALL_API]) {
        // Handle synchronous actions
        dispatch(action);
        return resolve();
      } else {
        // Handle asynchronous actions
        params = extractParams(action[CALL_API]);
        if (params.method === 'get' || params.method === 'delete') {
          agent[params.method](params.url)
          .withCredentials()
          .query(params.query)
          .end((err, res) => {
            if (err) {
              handleError(err);
            } else {
              handleSuccess(res);
            }
          });
        } else {
          agent[params.method](params.url)
          .withCredentials()
          .type('application/json')
          .accept('application/json')
          .send(params.body)
          .end((err, res) => {
            if (err) {
              handleError(err);
            } else {
              handleSuccess(res);
            }
          });
        }
      }
    });
  };
}

function extractParams(callApi) {
  const {
          method,
          path,
          query,
          body,
          successType,
          errorType,
          afterSuccess,
          afterError
        } = callApi;

  const url = `${process.env.REACT_APP_NIGHTCRAWLER_API_BASE_URL}${path}`;

  return {
    method,
    url,
    query,
    body,
    successType,
    errorType,
    afterSuccess,
    afterError
  };
}
