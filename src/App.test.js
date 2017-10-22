import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a div', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('div').length).toBe(1);
});