import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

const AddFavoriteSlider = ({ selectSort, initialSort }) => {
    return(
        <div className='modalOverlay__sort'>
            Сортировка
            <Select className='modalOverlay__sort-input' onChange={selectSort} defaultValue={initialSort}>
                <Option value="noSort">Без сортировки</Option>
                <Option value="date">По дате</Option>
                <Option value="rating">По рейтингу</Option>
                <Option value="relevance">По релевантности</Option>
                <Option value="title">По алфавиту</Option>
                <Option value="videoCount">В порядке убывания загруженных видео</Option>
                <Option value="viewCount">По просмотрам</Option>
            </Select>
        </div>
    )
}

AddFavoriteSlider.propTypes = {
    initialSort: PropTypes.number,
    selectSort: PropTypes.func
}

AddFavoriteSlider.defaultProps = {
    initialSort: 'noSort',
    selectSort: () => {}
}

export default AddFavoriteSlider