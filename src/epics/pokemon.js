import { Observable } from 'rxjs';
import { START_REQUEST, ABORT_RETRY, received, error, abortRetry } from '../ducks/pokemon';

export default function fetchPokemon(action$, _, { api }) {
  return action$
    .ofType(START_REQUEST)
    .switchMap(() =>
      Observable.concat(
        Observable.of(abortRetry()),
        Observable.concat(
          Observable.of({ type: 'starting_request' }),
          Observable
            // .fromPromise(api.getPokemon())
            // .map(({ data: { results } }) => received(results))
            .throw(new Error('some error'))
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
