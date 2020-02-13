import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem/VideoItem'
import { Icon } from 'antd'
import './VideoList.scss'

const VideoList = ({ list, result, value, isSearch, selectGrid, selectList, actList }) =>{ 
    return (
        <Fragment>
            <div className='search__sort-header'>
                <div className='search__header'>
                    {isSearch && <h1 className='search__header-text'>Видео по запросу «{value}»</h1>}
                </div>
                <div className='search__sort'>
                    {isSearch && <Icon className={`search__icon search_ico${actList}`} onClick={selectList} type="unordered-list" />}
                    {isSearch && <Icon className={`search__icon search_icon${actList}`} onClick={selectGrid} type="border-inner" />}
                </div>
            </div>
            <div className={`search__result-container search__result-container${list}`}>
                {result.map(({ id:{ videoId }, snippet: { channelTitle, title }, snippet: { thumbnails: { default: { url } } } }) =>(
                    <VideoItem list={list} key={ videoId } videoId={ videoId } title={ title } channelTitle={ channelTitle } url={ url } />
                ))}
            </div>
        </Fragment>
    )
}

export default VideoList;

VideoList.propTypes = {
    result: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    stateList: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    isSearch: PropTypes.bool.isRequired,
    selectGrid: PropTypes.func,
    selectList: PropTypes.func
  }
  
  VideoList.defaultProps = {
    result: [],
    value: '',
    stateList: '',
    list: '_list',
    isSearch: false,
    selectGrid: ()=>{},
    selectList: ()=>{}
  }