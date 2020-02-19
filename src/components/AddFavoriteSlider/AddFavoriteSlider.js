import React from 'react';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import PropTypes from 'prop-types';


const AddFavoriteSlider = ({ numResults, maxResults }) => {
    return(
        <div className='modalOverlay__sort'>
            Выводимое количество видео
            <Slider className='modalOverlay__result' onChange={numResults} defaultValue={maxResults} max={50} tooltipVisible/>
        </div>
    )
}

AddFavoriteSlider.propTypes = {
    maxResults: PropTypes.number,
    numResults: PropTypes.func
}

AddFavoriteSlider.defaultProps = {
    maxResults: 12,
    numResults: () => {}
}

export default AddFavoriteSlider