import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import IngredientsList from '../components/IngredientsList';

const setup = (input = {}) => (
  {
    doSearch: input.doSearch || jest.fn(),
    canSearch: !!input.canSearch,
    ingredients: input.ingredients || [],
    removeIngredient: input.removeIngredient || jest.fn(),
    nextIngredient: input.nextIngredient || '',
    addIngredient: input.addIngredient || jest.fn(),
    handleAddNextChange: input.handleAddNextChange || jest.fn(),
  }
);

describe('Ingredients List', () => {
  it('renders without crashing', () => {
    const testEnv = setup();
    const div = document.createElement('div');
    ReactDOM.render(<IngredientsList {...testEnv} />, div);
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
    const testEnv = setup({
      ingredients: undefined
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

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

  it('passes the nextIngredient prop to the value of an AddTextItemInput component', () => {
    const testEnv = setup({
      nextIngredient: `I'm Batman`,
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().value).toBe(testEnv.nextIngredient);
  });

  it('passes the addIngredient callback to the addHandler of a AddTextItemInput component', () => {
    const testEnv = setup({
      addIngredient: jest.fn(),
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().addHandler).toBe(testEnv.addIngredient);
  });

  it('passes the handleAddNextChange callback to the changeHandler of an AddTextItemInput component', () => {
    const testEnv = setup({
      handleAddNextChange: jest.fn(),
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().changeHandler).toBe(testEnv.handleAddNextChange);
  });

  it('disables the add button on the AddTextItemInput commponent if canSearch is false and we have ingredients in the list', () => {
    const testEnv = setup({
      canSearch: false,
      ingredients: [`I'm Batman`],
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().canAddItem).toBe(false);
  });

  it('enables the add button on the AddTextItemInput component if canSearch is true and we have ingredients', () => {
    const testEnv = setup({
      canSearch: true,
      ingredients: [`I'm Batman`],
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().canAddItem).toBe(true);
  });

  it('enables the add button on the AddTextItemInput component if canSearch is false but we have no ingredients', () => {
    // canSearch will be false if we have no ingredients but we need to able to add at least one, that's what we're testing here

    const testEnv = setup({
      canSearch: false,
      ingredients: [],
    });

    const wrapper = shallow(<IngredientsList {...testEnv} />);

    expect(wrapper.find('AddTextItemInput').props().canAddItem).toBe(true);
  });
});

