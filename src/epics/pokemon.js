import { Observable } from 'rxjs';
import { START_REQUEST, ABORT_RETRY, received, error, abortRetry } from '../ducks/pokemon';

const fakeRequest = () => {
  if (Math.random() > 0.8) {
    return Promise.resolve(['item1', 'item2', 'item3']);
  }
  return Promise.reject('Request Failed');
};


export default function fetchPokemon(action$) {
  return action$
    .ofType(START_REQUEST)
    .switchMap(() =>
      Observable.concat(
        Observable.of(abortRetry()),
        Observable.concat(
          Observable.of({ type: 'starting_request' }),
          Observable
            .of(1)
            .switchMap(fakeRequest)
            .map(results => received(results))
            .catch(err => Observable.concat(
              Observable.of(({ type: 'starting_retry' })),
              Observable
                .interval(1000)
                .map(n => ({ type: 'retrying_in', timeLeft: 4 - n }))
                .takeUntil(Observable.timer(5000)),
              Observable.throw(new Error(err)),
              ).takeUntil(action$.ofType(ABORT_RETRY)),
            ),
        ).retry(),
    ),
  );
}
