import React from 'react';
import { mount } from 'enzyme';
import config from './testSetup.js';
import DropDownControls from '../components/DropDownControls/DropDownControls.jsx';

describe(`DropDownControls unit testing`, () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<DropDownControls />);
  });

  test(`should be an instance of DropDownControls`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should match snapshot, `, () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(`expected initial state should be correct`, () => {

    expect(wrapper.state('query')).toEqual('abc-news-au');
    expect(wrapper.state('menuClass')).toEqual('hidden');
    expect(wrapper.state('placeholder')).toEqual('Choose your option');
    expect(wrapper.state('dropdown')).toEqual('dropdown.svg');
  });

  test(`should change state.query, state.placeholder,
        and state.menuClass when li node has been clicked`, () => {

      const li = wrapper.find('li').at(7);
      wrapper.setState({ menuClass: 'options-list-reveal'});

      expect(wrapper.state('query')).toEqual('abc-news-au');
      expect(wrapper.state('placeholder')).toEqual('Choose your option');
      expect(wrapper.state('menuClass')).toEqual('options-list-reveal');

      li.simulate('click',
        {
          target: {
            dataset: {
              value: 'cnbc'
            },
            innerText: 'CNBC'
          }
        }
      );

      expect(wrapper.state('query')).toEqual('cnbc');
      expect(wrapper.state('placeholder')).toEqual('CNBC');
      expect(wrapper.state('menuClass')).toEqual('hidden');
    });

  test(`should change state.menuClass onClick of p node`, () => {
    expect(wrapper.state('menuClass')).toEqual('hidden');

    const pNode = wrapper.find('p');

    pNode.simulate('click');

    expect(wrapper.state('menuClass')).toEqual('options-list-reveal');
  });
});
