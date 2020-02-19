import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const AddFavoriteQuery = ({ query, activeQuery }) => {
    return(
        <div>
            Запрос
            <Input onChange={(e) => activeQuery(e.target.value)}
            placeholder='Введите запрос'
            defaultValue={query}
            />
        </div>
    )
}

AddFavoriteQuery.propTypes = {
    query: PropTypes.string,
    activeQuery: PropTypes.func
}

AddFavoriteQuery.defaultProps = {
    query: '',
    activeQuery: () => {}
}

export default AddFavoriteQuery