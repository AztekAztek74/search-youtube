import React from 'react';
import 'antd/dist/antd.css';
import { Form, Select, Input, Button, Slider, Icon } from 'antd';
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal'
import './AddFavorite.scss'

const { Option } = Select;

class Favorite extends React.Component {

    render() {
        const { maxResults, activeQuery, initSort, initialSort, selectSort, numResults, titleFavorite, favoritesAdd, editFavorites, isOpen, modalAct, query, save, initTitle } = this.props;
        const { getFieldDecorator } = this.props.form
        return (
            <>
            { isOpen &&
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalOverlay__window">
                            <Form className="login-form">
                            <Icon className="modalOverlay__icon-close" onClick={modalAct} type="close" />
                            {save ? 
                            <h1 className="modalOverlay__header">Сохранить запрос</h1>:
                            <h1 className="modalOverlay__header">Изменить запрос</h1>
                            }
                                <Form.Item>
                                    Запрос
                                    {getFieldDecorator('query', {
                                        rules: [{ message: 'Введите запрос' }],
                                        initialValue: query
                                    })(
                                        <Input onChange={(e) => activeQuery(e.target.value)}
                                        placeholder="Введите запрос"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    Название
                                    {getFieldDecorator('title', {
                                        rules: [{ required: true, message: 'Введите название' },],
                                        initialValue: initTitle
                                    })(
                                        <Input onChange={titleFavorite}
                                        placeholder="Введите название"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    Сортировать по
                                    {getFieldDecorator('sort', {
                                        initialValue: initSort
                                    })(
                                        <Select onChange={selectSort} initialtValue={initialSort} label="Select" hasFeedback >
                                            <Option value="noSort">Без сортировки</Option>
                                            <Option value="date">По дате</Option>
                                            <Option value="rating">По рейтингу</Option>
                                            <Option value="relevance">По релевантности</Option>
                                            <Option value="title">По алфавиту</Option>
                                            <Option value="videoCount">В порядке убывания загруженных видео</Option>
                                            <Option value="viewCount">По просмотрам</Option>
                                        </Select>
                                    )}
                                </Form.Item>
                                <Slider className='modalOverlay__result' onChange={numResults} defaultValue={maxResults} max={50} />
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
                            </Form>
                        </div>
                    </div>
                </Portal>
            }
        </>
        )
    }
}

Favorite.propTypes = {
    isOpen: PropTypes.bool,
    modalAct: PropTypes.func,
    query: PropTypes.string,
    save: PropTypes.string,
    selectSort: PropTypes.func,
    numResults: PropTypes.func,
    titleFavorite: PropTypes.func,
    favoritesAdd: PropTypes.func,
    maxResults: PropTypes.number,
    activeQuery: PropTypes.func,
    initTitle: PropTypes.string,
    initSort: PropTypes.string,
}

Favorite.defaultProps = {
    isOpen: false,
    modalAct: () => {},
    query: '',
    save: '',
    initTitle: '',
    initSort: 'noSort',
    selectSort: () => {},
    numResults: () => {},
    titleFavorite: () => {},
    favoritesAdd: () => {},
    activeQuery: () => {},
    maxResults: 12,
}

export const AddFavorite = Form.create({ name: 'add_favorite' })(Favorite);
