import React from 'react'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import PropTypes from 'prop-types'

const AddFavoriteButton = ({ save, modalAct, favoritesAdd, editFavorites }) =>{
    return(
        <div className='modalOverlay__button-group'>
            <Button onClick={modalAct} htmlType="submit" className="login-form-button">
                {save ? <span>Не сохранять</span> : <span>Не изменять</span>}
            </Button>
            {save ? 
                <Button onClick={favoritesAdd} type="primary" htmlType="submit" className="login-form-button">
                    <span>Сохранить</span>
                </Button>
                :
                <Button onClick={editFavorites} type="primary" htmlType="submit" className="login-form-button">
                    <span>Изменить</span>
                </Button>}
        </div>
    )
}

AddFavoriteButton.propTypes ={
    save: PropTypes.bool,
    modalAct: PropTypes.func,
    favoritesAdd: PropTypes.func,
    editFavorites: PropTypes.func
}

AddFavoriteButton.defaultProps = {
    save: false,
    modalAct: () => {},
    favoritesAdd: () => {},
    editFavorites: () => {},

}

export default AddFavoriteButton