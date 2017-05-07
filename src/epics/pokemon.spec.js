import 'rxjs';

import epicTestHelper from '../test/epicTestHelper';
import pokemonEpic from './pokemon';
import { mounted, received, error } from '../ducks/pokemon';


describe('pokemon epic', () => {
  it('dispatches a received action with pokemon', async () => {
    const payload = ['pokemon1'];

    const api = {
      getPokemon: () => Promise.resolve({ data: { results: payload } }),
    };

    const result = await epicTestHelper(pokemonEpic, mounted(), {}, { api });
    expect(result).toEqual([received(payload)]);
  });

  it('dispatches an error action', async () => {
    const epicError = new Error('Error');

    const api = {
      getPokemon: () => Promise.reject(epicError),
    };

    const result = await epicTestHelper(pokemonEpic, mounted(), {}, { api });
    expect(result).toEqual([error(epicError)]);
  });
});
