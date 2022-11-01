import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from '@/store/reducer';
import rootSaga from '@/store/saga';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');

    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer as any,
    bindMiddleware([sagaMiddleware])
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
