import { all, put, takeLatest } from 'redux-saga/effects';

import { actionTypes, failure, loadDataSuccess } from '@/store/actions';

interface Action {
  cardNumber: string;
  type: string;
}

function* loadDataSaga(action: Action): any {
  try {
    const API_URL = `${
      process.env.NODE_ENV !== 'production'
        ? 'https://e4n1vk2mxk.execute-api.us-east-1.amazonaws.com/dev'
        : 'https://gf8ssmidyg.execute-api.us-east-1.amazonaws.com/prod'
    }`;
    const response = yield fetch(`${API_URL}/balances/${action.cardNumber}`);
    const data = yield response.json();

    yield put(loadDataSuccess(data));
  } catch (error) {
    yield put(failure(error));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
