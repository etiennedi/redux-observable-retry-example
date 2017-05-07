// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { Pokemon } from './Pokemon';

const mounted = jest.fn();

const pokemon = [
  { name: 'poke one' },
  { name: 'poke two' },
];

describe('Pokemon Page', () => {
  it('should call mounted dispatcher', () => {
    const component = shallow(
      <Pokemon
        dispatchMounted={mounted}
        pokemon={[]}
      />,
      );
    expect(mounted).toHaveBeenCalled();
  });
  it('should render pokemon', () => {
    const component = shallow(
      <Pokemon
        dispatchMounted={mounted}
        pokemon={pokemon}
      />,
      );
    expect(component.text()).toContain('poke one');
    expect(component.text()).toContain('poke two');
  });
});
