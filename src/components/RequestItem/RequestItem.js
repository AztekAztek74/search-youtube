import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const RequestItem = ({ className, onChange, onSearch, value, modalAct }) =>{
    const { Search } = Input;
    return(
        <Search className={className}
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        onChange={(e) => onChange(e.target.value)}
        onSearch={onSearch}
        value={value}
        suffix={<Icon onClick={modalAct} type="heart" theme="twoTone" twoToneColor="#1390E5" />}
        />
    )
}

RequestItem.propTypes = {
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    modalAct: PropTypes.func,
    value: PropTypes.string,
  }
  
RequestItem.defaultProps = {
    onChange: () => {},
    onSearch: () => {},
    modalAct: () => {},
    value: ''
}

export default RequestItem;