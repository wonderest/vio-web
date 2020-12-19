import {
  FETCH_SIMPANAN_REQUEST,
  FETCH_SIMPANAN_SUCCESS,
  FETCH_SIMPANAN_FAILURE,
} from 'utils/redux/simpanan/simpanan.types';

const initialState = {
  loading: false,
  simpanan: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIMPANAN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SIMPANAN_SUCCESS:
      return {
        ...state,
        loading: false,
        simpanan: action.payload,
        error: '',
      };
    case FETCH_SIMPANAN_FAILURE:
      return {
        ...state,
        loading: false,
        simpanan: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
