import React from 'react';
import Controls from '../components/Controls/Controls.jsx';
import config from './testSetup.js';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import 'jest';

describe(`Controls unit testing`, () => {
  let wrapper;
  let mockStore;
  let initialState;
  let store;
  let section;
  let h3;
  let input1;
  let input2;
  let input3;
  let handleSubmit;

  beforeEach(() => {
    initialState = {};
    mockStore = configureStore();
    store = mockStore(initialState);
    handleSubmit = jest.fn();

    wrapper = mount(
      <Controls
        store={store}
        handleSubmit={handleSubmit} />
    );

    section = wrapper.find('section');
    h3 = section.find('h3');
    input1 = section.find('input').at(0);
    input2 = section.find('input').at(1);
    input3 = section.find('input').at(2);
  });

  test(`should create an instance of Controls`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should render a parent section node,
        an h3 node, and 3 input nodes`, () => {

      expect(section.type()).toEqual('section');
      expect(h3.parent().is('section')).toEqual(true);
      expect(h3.type()).toEqual('h3');
      expect(input1.type()).toEqual('input');
      expect(input2.type()).toEqual('input');
      expect(input3.type()).toEqual('input');
    });
});
