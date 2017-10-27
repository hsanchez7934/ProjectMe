import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveArticles } from '../../actions';
import FeedYourMindCard from '../FeedYourMindCard/FeedYourMindCard.jsx';
import './FeedYourMindContainer.css';

class FeedYourMindContainer extends Component {

  componentDidMount() {
    this.props.retrieveArticles();
  }

  createCards = () => {
    const array = [
      {
        title: `yo thats where it happens bro`,
        description:`get it how we want it you littler
                      bitches just done know nigga`,
        url: '#',
        urlToImage: '3'
      },
      {
        title: `yo thats where it happens bro`,
        description:`get it how we want it you littler
                      bitches just done know nigga`,
        url: '#',
        urlToImage: '3'
      },
      {
        title: `yo thats where it happens bro`,
        description:`get it how we want it you littler
                      bitches just done know nigga`,
        url: '#',
        urlToImage: '3'
      },
      {
        title: `yo thats where it happens bro`,
        description:`get it how we want it you littler
                      bitches just done know nigga`,
        url: '#',
        urlToImage: '3'
      },
      {
        title: `yo thats where it happens bro`,
        description:`get it how we want it you littler
                      bitches just done know nigga`,
        url: '#',
        urlToImage: '3'
      }
    ]
    const { articles } = this.props;
    return articles.map( (article, index) =>
      <FeedYourMindCard article={article} key={index} />);
  }

  render() {
    return (
      <section className='info-card-container'>
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
  retrieveArticles: () => dispatch(retrieveArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedYourMindContainer);
