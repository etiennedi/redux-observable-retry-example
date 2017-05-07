import { Observable } from 'rxjs';
import { START_REQUEST, ABORT_RETRY, received, requestStarted, retryStarted, retryTimerUpdated, abortRetry } from '../ducks/sampleRequest';

const fakeRequest = () => {
  if (Math.random() > 0.75) {
    return Promise.resolve(['item1', 'item2', 'item3']);
  }
  return Promise.reject('Request Failed');
};


export default function sampleRequest(action$) {
  return action$
    .ofType(START_REQUEST)
    .switchMap(() =>
      Observable.concat(
        Observable.of(abortRetry()),
        Observable.concat(
          Observable.of(requestStarted()),
          Observable
            .of(1)
            .switchMap(fakeRequest)
            .map(results => received(results))
            .catch(err => Observable.concat(
              Observable.of(retryStarted()),
              Observable
                .interval(1000)
                .map(n => retryTimerUpdated(4 - n))
                .takeUntil(Observable.timer(5000)),
              Observable.throw(new Error(err)),
              ).takeUntil(action$.ofType(ABORT_RETRY)),
            ),
        ).retry(),
    ),
  );
}
