import React from 'react';
import PropTypes from 'prop-types';
import './VideoItem.scss'

const VIDEO_PATH = 'https://www.youtube.com/watch?v=';

const VideoItem = ({ videoId, title, channelTitle, url, list }) =>{ 
    return (
        <div key={videoId} className={`card card${list}`}>
            <a target="_blank" href={VIDEO_PATH + videoId} >
                <div className={`card__inner card__inner${list}`}>
                    <div className={`card__content-img${list}`}>
                        <img className={`card__img card__img${list}`} src={url} alt="" />
                    </div>
                    <div className={`card__content-text card__content-text${list}`}>
                        <h1 className={`card__title card__title${list}`}>{title}</h1>
                        <h2 className={`card__chanel card__chanel${list}`}>{channelTitle}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default VideoItem;

VideoItem.propTypes = {
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }
  
  VideoItem.defaultProps = {
    videoId: '',
    title: '',
    channelTitle: '',
    list: '',
    url: ''
  }