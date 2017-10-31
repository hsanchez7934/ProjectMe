import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveArticles, retrieveQuote } from '../../actions';
import FeedYourMindCard from '../FeedYourMindCard/FeedYourMindCard.jsx';
import DropDownControls from '../DropDownControls/DropDownControls.jsx';
import './FeedYourMindContainer.css';

class FeedYourMindContainer extends Component {

  componentDidMount() {
    this.props.retrieveQuote();
  }

  createCards = () => {
    const { articles } = this.props;
    return articles.map( (article, index) =>
      <FeedYourMindCard article={article} key={index} />);
  }

  render() {
    const { retrieveArticles, quote } = this.props;
    return (
      <section className='info-card-container'>
        <header className='feed-your-mind-header'>
          <section className='header-top-section'>
            <h1 className='feed-your-mind-title'>Feed Your Mind</h1>
          </section>

          <section className='header-bottom-section'>
            <p className='feed-your-mind-quote'>{quote.quote}</p>
            <p className='feed-your-mind-quote-author'>{quote.author}</p>
          </section>
        </header>
        <DropDownControls retrieveArticles={retrieveArticles} />
        <section className='card-container'>
          {
            this.createCards()
          }
        </section>
      </section>
    );
  }
}

FeedYourMindContainer.propTypes = {
  retrieveArticles: PropTypes.func,
  articles: PropTypes.array,
  retrieveQuote: PropTypes.func,
  quote: PropTypes.object
};

const mapStateToProps = store => ({
  articles: store.articles,
  quote: store.quote
});

const mapDispatchToProps = dispatch => ({
  retrieveArticles: (query) => dispatch(retrieveArticles(query)),
  retrieveQuote: () => dispatch(retrieveQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedYourMindContainer);
