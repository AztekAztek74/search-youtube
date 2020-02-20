import React, { Fragment, Component } from 'react'
import RequestItem from '../../components/RequestItem/RequestItem'
import axios from 'axios'
import './Search.scss'
import VideoList from '../../components/VideoList/VideoList'
import { connect } from 'react-redux'
import { activeQuery, activeSearch, activeResult, activeSort } from '../../actions/QueryActions'
import AddFavorite from '../../components/AddFavorite/AddFavorite'
import { addFavorites, editFavorites, removeFavorites } from '../../actions/FavoritesQuery'
import { message } from 'antd'
import Preloader from '../../components/Preloader/Preloader'

const BASE_PATH = 'https://www.googleapis.com/youtube/v3'
const SEARCH_PATH = '/search?part=snippet&q='
const KEY_PATH = '&type=video&key='
const KEY = 'AIzaSyAhtDMDRo6MVoESyjzHW9bwExpvlZ-u7VA'
const RESULT = '&maxResults='
const BASE_SORT = '&sort='

class Search extends Component {

  state = {
    result: [],
    modalWindow: false,
    stateList: 'list',
    completedQuery: '',
    sort: '',
    save: true,
    title: '',
    isLoading: false
  }

  componentDidMount(){
    const { query, isSearch } = this.props
    if ( query.length && isSearch ){
      this.onSearch()
    }
  }

    // Fetch Data
  fetchData = (query, result, sort) => {
    this.setState({isLoading: true})
    axios.get(`${BASE_PATH}${SEARCH_PATH}${query}${KEY_PATH}${KEY}${RESULT}${result}${BASE_SORT}${sort}`)
    .then(result => {
      this.setVideo(result)
      this.setState({isLoading: false})
    })
    .catch(error => error)
  }

  setVideo = (result) => {
    this.setState({
      result: result.data.items
    })
  }

  onSearch = () =>{
    const { query, activeSearch, result, sort } = this.props
    this.fetchData(query, result, sort)
    this.setState({
      completedQuery: query,
    })
    activeSearch()

  }//   /Fetch Data
    
    // State VideoList
  selectList = () =>{
    this.setState({
      stateList: 'list'
    })
  }

  selectGrid = () =>{
    this.setState({
      stateList: 'grid'
    })
  }// /State VideoList

  //Modal Window

  modalAct = () =>{
    this.setState(prevState => ({
      modalWindow: !prevState.modalWindow
    }));
  }

  selectSort = (value) =>{
    this.setState ({
      sort: value
    })
  }

  titleFavorite = ({target: {value}}) => {
    this.setState ({
      title: value
    })
  }

  favoritesAdd = () =>{
    const { sort, query, activeLogin, addFavorites, result, activeResult, activeSort } = this.props
    const { title } = this.state
    addFavorites((new Date()).getTime(), query, title, sort, result, activeLogin )
    this.modalAct()
    activeResult(12)
    activeSort('noSort')
    this.message()
  }

  message = () =>{
    message.info(`Поиск сохранен в разделе «Избранное»`)
  }


  render (){
    const { result, stateList, completedQuery, modalWindow, save, isLoading } = this.state
    const { isSearch, activeSort, activeResult, query, activeQuery } = this.props
    const act = isSearch ? '_active' : '_disable'
    const list = stateList === 'list' ? '_list' : '_grid'
    const actList = stateList === 'list' ? '_list_active' : '_grid_active'
    return(
        <Fragment>
          <div className={`search search${act}`}>
            <div className={`search__input${act}`}>
              <h1 className={`search__header-title${act}`}>Поиск видео</h1>
              <AddFavorite activeQuery={activeQuery} selectSort={activeSort} numResults={activeResult} titleFavorite={this.titleFavorite} favoritesAdd={this.favoritesAdd} save={save} query={query} isOpen={modalWindow} modalAct={this.modalAct} />
              <RequestItem className={isSearch ? 'search_active' : 'search_disabled' } modalAct={this.modalAct} value={query} onChange={activeQuery} onSearch={this.onSearch} /> 
            </div>
            {isLoading ? 
              <Preloader />: 
              result.length ? 
              <VideoList list={list} actList={actList} isSearch={isSearch} result={result} value={completedQuery} selectGrid={this.selectGrid} selectList={this.selectList} />
              :
              isSearch && 
                <div className='search__error'>
                  <h1 className='search__error-text'>Видео по запросу не найдено</h1>
                </div>
            }
          </div>
        </Fragment>
    )
  }
}

export default connect (state => 
  ({
    activeLogin: state.activeLogin,
    users: state.users,
    query: state.query,
    isSearch: state.isSearch,
    result: state.result,
    sort: state.sort
  }), { activeSort, activeResult, activeQuery, activeSearch, addFavorites, editFavorites, removeFavorites })(Search)
