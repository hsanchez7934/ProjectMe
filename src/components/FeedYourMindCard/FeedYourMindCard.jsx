import React from 'react';
import PropTypes from 'prop-types';
import './FeedYourMindCard.css';

{/* <img src={urlToImage} className='info-card-image'/> */}
const FeedYourMindCard = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <article className='info-card'>
      <section className='wrapper'>

        <section className='data'>

          <section className='content'>
            <h3 className='info-card-title'>{title}</h3>
            <p className='info-card-body'>{description}</p>
            <label htmlFor='show-menu'><span></span></label>
            <a href={url} className='info-card-link'>
              Click here for full article
            </a>
          </section>
          
          <input type="checkbox" className="show-menu" />
          <ul className="menu-content">
            <li><a href="#" className="fa fa-bookmark-o"></a></li>
            <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
            <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
          </ul>

        </section>


      </section>
    </article>
  );
};

FeedYourMindCard.propTypes = {
  article: PropTypes.object
};

export default FeedYourMindCard;
