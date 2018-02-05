import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import getElement from './common/utils/getElement';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('passes ingredients that are in the state to the IngredientsList component', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ ingredients: [`I'm Batman`]});

    expect(wrapper.find('IngredientsList').props().ingredients).toEqual(wrapper.state().ingredients);
  });

  it('passes nextIngredient off state to the IngredientsList component', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ nextIngredient: `I'm Batman` });

    expect(wrapper.find('IngredientsList').props().nextIngredient).toEqual(wrapper.state().nextIngredient);
  });

  it('passes canSearch off state to the IngredientsList component', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ canSearch: true });

    expect(wrapper.find('IngredientsList').props().canSearch).toEqual(wrapper.state().canSearch);
  });

  it('does not add to ingredients on state when addingredient is called by the IngredientsList and the nextIngredient is empty', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ 
      nextIngredient: '',
      ingredients: [],
    });

    wrapper.find('IngredientsList').props().addIngredient();

    expect(wrapper.state().ingredients).toEqual([]);
  });

  it('adds the nextIngredient to the list of ingredients on state when add ingredient is called by the IngredientsList', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ 
      nextIngredient: `I'm Batman`,
      ingredients: [],
    });

    wrapper.find('IngredientsList').props().addIngredient();

    expect(wrapper.state().ingredients).toEqual([`I'm Batman`]);
  });

  it('clears the nextIngredient property on state when an ingredient is successfully added', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      nextIngredient: `I'm Batman`,
    });

    wrapper.find('IngredientsList').props().addIngredient();

    expect(wrapper.state().nextIngredient).toBe('');
  });

  it('sets canSearch to be true when an ingredient is successfully added', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      nextIngredient: `I'm Batman`,
      canSearch: false,
    });

    wrapper.find('IngredientsList').props().addIngredient();

    expect(wrapper.state().canSearch).toBe(true);
  });

  it('removes from the ingredients array on state the ingredient at the index passed in', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      ingredients: [`I'm Batman`],
    });

    wrapper.find('IngredientsList').props().removeIngredient(0);

    expect(wrapper.state().ingredients).toEqual([]);
  });

  it('sets canSearch to be false if we just removed the last ingredient in the list', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      ingredients: [`I'm Batman`],
    });

    wrapper.find('IngredientsList').props().removeIngredient(0);

    expect(wrapper.state().canSearch).toBe(false);
  });

  it('leaves canSearch as true if we still have ingredient items in the list after we have removed an ingredient', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      ingredients: [`I'm Batman`, 'I am also Batman'],
      canSearch: true,
    });

    wrapper.find('IngredientsList').props().removeIngredient(0);

    expect(wrapper.state().canSearch).toBe(true);
  });

  it('overwrites nextIngredient with the changed string that is passed into the change handler given to the IngredientsList', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      nextIngredient: `I'm Batman`,
    });

    wrapper.find('IngredientsList').props().handleAddNextChange(`I'm Joker`);

    expect(wrapper.state().nextIngredient).toBe(`I'm Joker`);
  });
});
