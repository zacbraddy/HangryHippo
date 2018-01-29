import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import getElement from '../../common/utils/getElement';

import AddTextItemInput from '../components/AddTextItemInput';

const setup = (input = {}) => (
  {
    id: input.id || 'id',
    placeholder: input.placeholder || 'placeholder',
    value: input.value || 'value',
    changeHandler: input.changeHandler || jest.fn(),
    addHandler: input.addHandler || jest.fn(),
    canAddItem: !!input.canAddItem,
  }
);

describe('AddTextItemInput', () => {
  it('renders without crashing', () => {
    const testEnv = setup();
    const div = document.createElement('div');
    ReactDOM.render(<AddTextItemInput {...testEnv} />, div);
  });

  it('passes the id prop to a label', () => {
    const testEnv = setup({ id: 'batId' });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    expect(getElement(wrapper)('label')('sr-only').length).toBe(1);
  });

  it('passes the id prop to the id of a text input', () => {
    const testEnv = setup({ id: 'batId' });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    expect(getElement(wrapper)('input')('form-control').props().id).toBe('batId');

  });

  it('passes the placeholder prop to the placeholder of a text input', () => {
    const testEnv = setup({ placeholder: 'batSignal' });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    expect(getElement(wrapper)('input')('form-control').props().placeholder).toBe('batSignal');
  });

  it('passes the value prop to the vale of a text input', () => {
    const testEnv = setup({ value: `I'm Batman` });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    expect(getElement(wrapper)('input')('form-control').props().value).toBe(`I'm Batman`);
  });

  it('calls the change handler on props with the current value when the input changes', () => {
    const testEnv = setup({
      changeHandler: jest.fn(),
      value: `I'm Batman`,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('input')('form-control').simulate('change', { target: { value: testEnv.value } });

    expect(testEnv.changeHandler).toBeCalledWith(testEnv.value);
  });

  it('does not call the add callback on props for any key press that was nt an enter keypress', () => {
    const testEnv = setup({
      addHandler: jest.fn(),
      canAddItem: true,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('input')('form-control').simulate('keyPress', { key: 'Shift' });

    expect(testEnv.addHandler).not.toHaveBeenCalled();
  });

  it('does not call the add callback if the enter key is pressed but canAddItem is set to false', () => {
    const testEnv = setup({
      addHandler: jest.fn(),
      canAddItem: false,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('input')('form-control').simulate('keyPress', { key: 'Enter' });

    expect(testEnv.addHandler).not.toHaveBeenCalled();
  });

  it('does call the add call back when the enter key is pressed', () => {
    const testEnv = setup({
      addHandler: jest.fn(),
      canAddItem: true,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('input')('form-control').simulate('keyPress', { key: 'Enter' });

    expect(testEnv.addHandler).toHaveBeenCalled();
  });

  it('calls the add call back when a button in the component is pressed', () => {
    const testEnv = setup({
      addHandler: jest.fn(),
      canAddItem: true,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('button')('btn-success').simulate('click');

    expect(testEnv.addHandler).toHaveBeenCalled();
  });

  it('does not call the addHandler callback when the button is clicked and canAddItem is false', () => {
    const testEnv = setup({
      addHandler: jest.fn(),
      canAddItem: false,
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    getElement(wrapper)('button')('btn-success').simulate('click');

    expect(testEnv.addHandler).not.toHaveBeenCalled();
  });

  it('disables add item button based on the canAddItem prop', () => {
    const testEnv = setup({
      canAddItem: false
    });

    const wrapper = shallow(<AddTextItemInput {...testEnv} />);

    expect(getElement(wrapper)('button')('btn-success').props().disabled).toBe(true);
  });
});
