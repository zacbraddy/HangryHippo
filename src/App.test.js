import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a div with the className prop set to be an item card', () => {
  const wrapper = shallow(<App />);

  expect(
  wrapper
    .find('div')
    .findWhere(e => e.props().className === 'list-item-card').length
).toBe(1);
});

it('renders a stringified version of props in the div', () => {
  const wrapper = shallow(<App />);

  expect(
    wrapper
      .find('div')
      .findWhere(e => e.props().className === 'list-item-card')
      .text()
  ).toBe(JSON.stringify(App.defaultProps));
});
