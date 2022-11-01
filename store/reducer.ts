import { HYDRATE } from 'next-redux-wrapper';

import { actionTypes } from '@/store/actions';

const initialState = {
  balancesData: [],
  error: false,
  pending: false,
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case actionTypes.LOAD_DATA:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        balancesData: [...state.balancesData, action.data].sort(
          (a, b) => b.currentBalance.value - a.currentBalance.value
        ),
        pending: false,
      };
    case actionTypes.REMOVE:
      return {
        ...state,
        balancesData: state.balancesData.filter(
          (element: any) => element.cardNumber !== action.cardNumber
        ),
      };
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
