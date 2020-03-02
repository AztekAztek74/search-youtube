import React from 'react'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Navigation.scss'


const Navigation = ({ out }) => {
    return (
        <div className='container'>
            <nav className='navigation'>
                <div className='navigation__sections'>
                    <div className='navigation__button'>
                        <NavLink  exact to='/search'>Поиск</NavLink>
                    </div>
                    <div className='navigation__button'>
                        <NavLink to='/favorites'>Избранное</NavLink>
                    </div>
                </div>
                <div className='navigation__out'>
                    <div className='navigation__button' onClick={out} >
                        <NavLink exact to='/search'>Выйти</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navigation.propTypes ={
    out: PropTypes.func.isRequired,
}

Navigation.defaultProps ={
    out: () => {},
}

export default Navigation;