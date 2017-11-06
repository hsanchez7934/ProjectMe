import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../assets/goalscardcontainerhero.mp4';
import './VideoIntro.css';

const VideoIntro = () => (
  <section id='video-container'>
    <video autoPlay muted loop>
      <source
        src={video}
        type='video/mp4'/>
    </video>
    <Link to={'/landingpage'}>
      <button id='skip-button'>Skip Intro</button>
    </Link>
  </section>
);

export default VideoIntro;
