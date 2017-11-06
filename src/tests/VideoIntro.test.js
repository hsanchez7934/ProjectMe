import React from 'react';
import { mount } from 'enzyme';
import config from './testSetup.js';
import VideoIntro from '../components/VideoIntro/VideoIntro.jsx';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

describe(`VideoIntro unit testing`, () => {
  let wrapper;

  beforeEach(() => {

    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };

    wrapper = mount(
      <VideoIntro />,
      {context, childContextTypes}
    );
  });

  test(`should render instance of VideoIntro`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should render section node, video, node
        and button node`, () => {
      const section = wrapper.find('section');
      const video = section.find('video');
      const button = section.find('button');

      expect(section.exists()).toEqual(true);
      expect(video.exists()).toEqual(true);
      expect(button.exists()).toEqual(true);
    });

  test(`shoudl match snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
