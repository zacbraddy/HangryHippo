import React from 'react';
import ReactDOM from 'react-dom';
import getElement from '../../common/utils/getElement';
import { shallow } from 'enzyme';
import IngredientListItem from '../components/IngredientListItem';

const setup = inputs => (
  {
    removeItem: inputs.removeItem || jest.fn(),
    index: inputs.index || 0,
  }
);

describe('Ingredient List Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IngredientListItem />, div);
  });

  it('should pass children into a list item card div', () => {
    const wrapper = shallow(<IngredientListItem>I'm Batman</IngredientListItem>);

    expect(getElement(wrapper)('div')('ingredient-list-item-value').text()).toBe(`I'm Batman`);
  });

  it('calls the removeItem callback when the remove button is clicked and passes the index prop as a parameter', () => {
    const testEnv = setup({
      removeItem: jest.fn(),
      index: 1,
    });

    const wrapper = shallow(<IngredientListItem {...testEnv} />);

    getElement(wrapper)('button')('btn-ingredient-list-item').simulate('click')
    
    expect(testEnv.removeItem).toBeCalledWith(testEnv.index);    
  });
});

