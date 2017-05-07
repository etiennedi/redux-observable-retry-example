import { combineEpics } from 'redux-observable';
import sampleRequest from './sampleRequest';

import * as api from '../api';

export default (...args) => combineEpics(
  sampleRequest,
)(...args, { api });
