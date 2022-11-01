export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  REMOVE: 'REMOVE',
};

export function failure(error: any) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData(cardNumber: string) {
  return { type: actionTypes.LOAD_DATA, cardNumber };
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function remove(cardNumber: string) {
  return { type: actionTypes.REMOVE, cardNumber };
}
