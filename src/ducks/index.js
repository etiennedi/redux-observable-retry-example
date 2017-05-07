import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sampleRequest from './sampleRequest';

export default combineReducers({
  form: formReducer,
  sampleRequest,
});
