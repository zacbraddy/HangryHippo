import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecipeItem from "../../RecipeItem/components/RecipeItem";
import RecipeItemList from '../components/RecipeItemList';
import getElement from '../../common/utils/getElement';

const setup = (numberOfItems = 0) => {
  const testEnv = {
    items: []
  };

  for(let i = 0; i < numberOfItems; i++) {
    testEnv.items.push({
      id: 641803,
      title: "Easy & Delish! ~ Apple Crumble",
      image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
      usedIngredientCount: 3,
      missedIngredientCount: 4,
      likes: 1
    });
  }
  
  return testEnv;
}

describe('List of Recipe Items', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RecipeItemList />, div);
  });

  it('displays a message when no items are found', () => {
    const testEnv = setup();

    const wrapper = shallow(<RecipeItemList {...testEnv} />);

    expect(getElement(wrapper)('div')('recipe-item-list').text()).toBe('No recipes found');  
  });

  it('displays a message when no items prop is supplied', () => {
    const wrapper = shallow(<RecipeItemList />);

    expect(getElement(wrapper)('div')('recipe-item-list').text()).toBe('No recipes found');
  });

  it('renders a RecipeItem for each item passed in from props', () => {
    const testEnv = setup(3);

    const wrapper = shallow(<RecipeItemList {...testEnv} />);

    expect(wrapper.find('RecipeItem').length).toBe(3);
  });

  it('passes all necessary props to each RecipeItem', () => {
    const testEnv = setup(1);

    const wrapper = shallow(<RecipeItemList {...testEnv} />);

    expect(wrapper.find('RecipeItem').props()).toEqual(testEnv.items[0]);
  });
});
