import { combineEpics } from 'redux-observable';
import fetchPokemon from './pokemon';

import * as api from '../api';

export default (...args) => combineEpics(
  fetchPokemon,
)(...args, { api });
