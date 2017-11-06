import React from 'react';
import PropTypes from 'prop-types';
import './FeedYourMindCard.css';

const backgroundStyle = (imageUrl) => ({
  backgroundImage: 'url(' + imageUrl + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
});

const FeedYourMindCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <article className="card">
      <div
        className="wrapper"
        style={backgroundStyle(urlToImage)}>
        <div className="data">
          <div className="content">
            <h3 className="card-title">
              {title}
            </h3>
            <p className="card-description">
              {description}
            </p>
            <a href={url}>Click here for full article</a>
          </div>
        </div>
      </div>
    </article>
  );
};

FeedYourMindCard.propTypes = {
  article: PropTypes.object
};

export default FeedYourMindCard;
