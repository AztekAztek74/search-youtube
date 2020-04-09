import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import './FavoriteItem.scss'


const FavoriteItem = ({ 
    id, title, modalActData, activeLogin, removeFavorites, queryFavorit
}) =>{
    return(
        <div key={id} className='favorite__inner'>
            <Link to='/search-youtube'><div className='favorite__title' onClick={() => queryFavorit(id)}><p>{title}</p></div></Link>
            <div>
                <Icon className='favorite__icon favorite__icon_edit' onClick={() => modalActData(id)} type="highlight" />
                <Icon className='favorite__icon favorite__icon_delete' type="delete" onClick={() => removeFavorites(id, activeLogin)} />
            </div>
        </div>
    )
}

FavoriteItem.propTypes ={
    removeFavorites: PropTypes.func.isRequired,
    modalActData: PropTypes.func.isRequired,
    queryFavorit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    activeLogin: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

}

FavoriteItem.defaultProps ={
    removeFavorites: () => {},
    modalActData: () => {},
    queryFavorit: () => {},
    id: 0,
    activeLogin: '',
    title: '',
}

export default FavoriteItem