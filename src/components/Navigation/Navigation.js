import React from 'react'
import 'antd/dist/antd.css'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class Navigation extends React.Component {

    render() {
        const { out, activeTab, currentTab } = this.props;
        return (
            <div className='navigation'>
                <Menu onClick={(e) => currentTab(e.key)} selectedKeys={activeTab} mode="horizontal">
                    <Menu.Item key="search">
                        <Link exact to='/search'>Поиск</Link>
                    </Menu.Item>
                    <Menu.Item key="favorites">
                        <Link to='/favorites'>Избранное</Link>
                    </Menu.Item>
                    <Menu.Item key="out" onClick={out} >
                        <Link exact to='/search'>Выйти</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

Navigation.propTypes ={
    out: PropTypes.func.isRequired,
    currentTab: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired
}

Navigation.defaultProps ={
    out: () => {},
    currentTab: () => {},
    activeTab: ''
}

export default Navigation;