import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal'
import './AddFavorite.scss'
import AddFavoriteQuery from '../AddFavoriteQuery/AddFavoriteQuery'
import AddFavoriteTitle from '../AddFavoriteTitle/AddFavoriteTitle'
import AddFavoriteSort from '../AddFavoriteSort/AddFavoriteSort'
import AddFavoriteSlider from '../AddFavoriteSlider/AddFavoriteSlider'
import AddFavoriteButton from '../AddFavoriteButton/AddFavoriteButton'


const AddFavorite = ({ maxResults, activeQuery, initialSort, selectSort, numResults, titleFavorite, favoritesAdd, editFavorites, isOpen, modalAct, query, save, initTitle }) => {
    return (
        <>
        { isOpen &&
            <Portal>
                <div className="modalOverlay">
                    <div className="modalOverlay__window">
                        <Icon className="modalOverlay__icon-close" onClick={modalAct} type="close" />
                        {save ? 
                        <h1 className="modalOverlay__header">Сохранить запрос</h1>:
                        <h1 className="modalOverlay__header">Изменить запрос</h1>
                        }
                        <AddFavoriteQuery query={query} activeQuery={activeQuery} />
                        <AddFavoriteTitle initTitle={initTitle} titleFavorite={titleFavorite} />
                        <AddFavoriteSort selectSort={selectSort} initialSort={initialSort} />
                        <AddFavoriteSlider maxResults={maxResults} numResults={numResults} />
                        <AddFavoriteButton save={save} modalAct={modalAct} editFavorites={editFavorites} favoritesAdd={favoritesAdd} />
                        
                    </div>
                </div>
            </Portal>
        }
    </>
    )
}

AddFavorite.propTypes = {
    isOpen: PropTypes.bool,
    modalAct: PropTypes.func,
    query: PropTypes.string,
    save: PropTypes.bool,
    selectSort: PropTypes.func,
    numResults: PropTypes.func,
    titleFavorite: PropTypes.func,
    favoritesAdd: PropTypes.func,
    maxResults: PropTypes.number,
    activeQuery: PropTypes.func,
    initTitle: PropTypes.string,
    initialSort: PropTypes.string,
}

AddFavorite.defaultProps = {
    isOpen: false,
    modalAct: () => {},
    query: '',
    save: false,
    initTitle: '',
    initialSort: 'noSort',
    selectSort: () => {},
    numResults: () => {},
    titleFavorite: () => {},
    favoritesAdd: () => {},
    activeQuery: () => {},
    maxResults: 12,
}

export default AddFavorite
