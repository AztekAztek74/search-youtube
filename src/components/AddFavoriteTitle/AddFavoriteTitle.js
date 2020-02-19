import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const AddFavoriteTitle = ({ initTitle, titleFavorite }) => {
    return(
        <div className='modalOverlay__title'>
            Название
            <Input onChange={titleFavorite}
            placeholder='Введите запрос'
            defaultValue={initTitle}
            />
        </div>
    )
}

AddFavoriteTitle.propTypes = {
    initTitle: PropTypes.string,
    titleFavorite: PropTypes.func
}

AddFavoriteTitle.defaultProps = {
    initTitle: '',
    titleFavorite: () => {}
}

export default AddFavoriteTitle