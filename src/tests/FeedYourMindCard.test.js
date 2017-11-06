import React from 'react';
import { mount } from 'enzyme';
import config from './testSetup.js';
import FeedYourMindCard from '../components/FeedYourMindCard/FeedYourMindCard.jsx';
import newsArticlesMockData from '../utilitiesData/mockData/newsArticlesMockData.js';

describe(`FeedYourMindCard units testing`, () => {
  let wrapper;
  let article;
  let div1;
  let div2;
  let div3;
  let h3;
  let pNode;
  let aNode;

  beforeEach(() => {
    wrapper = mount(
      <FeedYourMindCard
        article={newsArticlesMockData[0]} />
    );

    article = wrapper.find('article');
    div1 = article.find('div').at(0);
    div2 = article.find('div').at(1);
    div3 = article.find('div').at(2);
    h3 = article.find('h3');
    pNode = article.find('p');
    aNode = article.find('a');

  });

  test(`should create an instance of
        FeedYourMindCard`, () => {
      expect(wrapper.exists()).toEqual(true);
    });

  test(`should render one paret article node, 3 three divs,
        one h3, one p node, and one a node`, () => {
      expect(article.exists()).toEqual(true);
      expect(div1.exists()).toEqual(true);
      expect(div2.exists()).toEqual(true);
      expect(div3.exists()).toEqual(true);
      expect(h3.exists()).toEqual(true);
      expect(pNode.exists()).toEqual(true);
      expect(aNode.exists()).toEqual(true);
    });

  test(`should match snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
