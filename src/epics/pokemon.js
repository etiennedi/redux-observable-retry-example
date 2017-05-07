import { Observable } from 'rxjs';
import { MOUNTED, received, error } from '../ducks/pokemon';

export default function fetchPokemon(action$, _, { api }) {
  return action$
    .ofType(MOUNTED)
    .switchMap(() => Observable.concat(
      Observable.of({ type: 'starting_request' }),
      Observable
        .fromPromise(api.getPokemon())
        .map(({ data: { results } }) => received(results))
        // .throw(new Error('some error'))
        .catch(err => Observable.concat(
          Observable.of(({ type: 'starting_retry' })),
          Observable
            .interval(1000)
            .map(n => ({ type: 'retrying_in', timeLeft: 4 - n }))
            .takeUntil(Observable.timer(5000)),
          Observable.throw(new Error(err)),
          ),
        ),
    ).retry(),
    );
}
