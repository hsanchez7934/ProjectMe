import React from 'react';
import PropTypes from 'prop-types';
import './FeedYourMindCard.css';

{/* <img src={urlToImage} className='info-card-image'/> */}
const FeedYourMindCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div className="card-style card">
    <div className="wrapper">
      {/* <img src={url} /> */}
      <div className="data">
        <div className="content">

          <h3 className="title">{title}</h3>
          <p className="text">{description}</p>
          <a href={url} className='link-to-article'>Click here for full article</a>
          <label htmlFor="show-menu" className="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul className="menu-content">
          <li>
            <a href="#" className="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>


    </div>
  </div>
  );
};

FeedYourMindCard.propTypes = {
  article: PropTypes.object
};

export default FeedYourMindCard;
