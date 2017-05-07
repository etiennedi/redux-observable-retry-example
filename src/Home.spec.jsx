import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home Page', () => {
  it('should render ', () => {
    const component = shallow(<Home />);
    expect(component.text().length).toBeGreaterThan(0);
  });
});
