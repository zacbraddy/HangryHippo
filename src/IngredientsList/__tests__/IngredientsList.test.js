import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import IngredientsList from '../components/IngredientsList';

const setup = input => (
  {
    doSearch: input.doSearch || jest.fn(),
    canSearch: !!input.canSearch,
    ingredients: input.ingredients || [],
    removeIngredient: input.removeIngredient || jest.fn(),
  }
);

describe('Ingredients List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IngredientsList />, div);
  });

  it('should call the doSearch callback on props when the button is clicked', () => {
    const testEnv = setup({ doSearch: jest.fn() });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    const button = getElement(wrapper)('button')('ingredients-go-button');

    button.simulate('click');

    expect(testEnv.doSearch).toHaveBeenCalled();
  });

  it('should pass the canSearch property to button to set whether the button should be disabled or not', () => {
    const testEnv = setup({ canSearch: false});

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(getElement(wrapper)('button')('ingredients-go-button').props().disabled).toBe(true);
  });

  it('makes no IngredientListItems if no ingredients are passed in', () => {
    const wrapper = shallow(<IngredientsList />);

    expect(getElement(wrapper)('div')('ingredients-list-container').children('IngredientListItem').length).toBe(0);
  });

  it('makes no IngredientListItems if an empty ingredients list is passed in', () => {
    const testEnv = setup({
      ingredients: [],
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(getElement(wrapper)('div')('ingredients-list-container').children('IngredientListItem').length).toBe(0);
  });

  it('creates a IngredientListItem for each ingredient in the list and passes the props to the item', () => {
    const testEnv = setup({
      ingredients: [`I'm Batman`],
      removeIngredient: jest.fn(),
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    const result = getElement(wrapper)('div')('ingredients-list-container').children('IngredientListItem');

    expect(result.length).toBe(1);
    expect(result.props().removeItem).toBe(testEnv.removeIngredient);
    expect(result.props().children).toBe(testEnv.ingredients[0]);
  });
});
