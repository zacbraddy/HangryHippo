import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';
import Recipe from '../components/Recipe';

const setup = (inputs = {}) => (
  {
    instructions: inputs.instructions || '',
    hideRecipe: inputs.hideRecipe || jest.fn(),
  }
);

describe('Recipe tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Recipe />, div);
  });

  it('should call hideRecipe when the button is clicked', () => {
    const testEnv = setup({
      hideRecipe: jest.fn(),
    });

    const wrapper = shallow(<Recipe {...testEnv} />);

    getElement(wrapper)('button')('recipe-back-button').simulate('click');

    expect(testEnv.hideRecipe).toHaveBeenCalled();
  });

  // This test should work, and did in enzyme v2 but doesn't v3, there is currently a bug
  // open in the enzyme github, you can unskip this test once enzyme has resolved it's issue
  // https://github.com/airbnb/enzyme/issues/1297
  xit('should set the inner html of the recipe container to the instructions passed down', () => {
    const testEnv = setup({
      instructions: `I'm Batman`,
    });

    const wrapper = shallow(<Recipe {...testEnv} />);

    expect(getElement(wrapper)('div')('recipe').findWhere(e => e.props().dangerouslySetInnerHTML.__html === testEnv.instructions)).toBe(1);
  });
});
