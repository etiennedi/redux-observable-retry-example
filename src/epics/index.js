import { combineEpics } from 'redux-observable';
import sampleRequest from './sampleRequest';

export default combineEpics(
  sampleRequest,
);
