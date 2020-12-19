import { combineReducers } from 'redux';
import simpananReducer from 'utils/redux/simpanan/simpanan.reducer';
const rootReducer = combineReducers({
  simpanan: simpananReducer,
});

export default rootReducer;
