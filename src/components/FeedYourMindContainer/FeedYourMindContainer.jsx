import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveArticles } from '../../actions';
import FeedYourMindCard from '../FeedYourMindCard/FeedYourMindCard.jsx';
import DropDownControls from '../DropDownControls/DropDownControls.jsx';
import './FeedYourMindContainer.css';

class FeedYourMindContainer extends Component {

  createCards = () => {
    const { articles } = this.props;
    return articles.map( (article, index) =>
      <FeedYourMindCard article={article} key={index} />);
  }

  render() {
    return (
      <section className='info-card-container'>
        <DropDownControls retrieveArticles={this.props.retrieveArticles} />
        {
          this.createCards()
        }
      </section>
    );
  }
}

FeedYourMindContainer.propTypes = {
  retrieveArticles: PropTypes.func,
  articles: PropTypes.array
};

const mapStateToProps = store => ({
  articles: store.articles
});

const mapDispatchToProps = dispatch => ({
  retrieveArticles: (query) => dispatch(retrieveArticles(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedYourMindContainer);
