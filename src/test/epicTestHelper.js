import { Subject } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

const epicTestHelper = (epic, action, state = {}, dependencies = {}) => {
  const actions = new Subject();
  const actions$ = new ActionsObservable(actions);
  const store = { getState: () => state };
  const promiseEpic = epic(actions$, store, dependencies)
    .toArray()
    .toPromise();

  actions.next(action);
  actions.complete();

  return promiseEpic;
};

export default epicTestHelper;
