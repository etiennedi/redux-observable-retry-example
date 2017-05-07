import React from 'react';
import { shallow } from 'enzyme';

import Textfield from './Textfield';


describe('Textfield', () => {
  const component = shallow(
    <Textfield
      input={{}}
      label="I am a label"
      meta={{ error: false, touched: false }}
    />,
    );
  it('renders an input field by default', () => {
    expect(component.find('input').length).toBeGreaterThan(0);
  });
  it('renders an textfield if multiline is true', () => {
    component.setProps({ multiLine: true });
    expect(component.find('textarea').length).toBeGreaterThan(0);
  });

  it('does not show an error when the field is not touched', () => {
    component.setProps({
      meta: { error: 'I am an error', touched: false },
    });
    expect(component.text()).not.toContain('I am an error');
  });

  it('shows an error when the field is touched', () => {
    component.setProps({
      meta: { error: 'I am an error', touched: true },
    });
    expect(component.text()).toContain('I am an error');
  });
});
