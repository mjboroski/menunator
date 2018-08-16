import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: itemsReducer,
  form: formReducer
});

export default rootReducer;
