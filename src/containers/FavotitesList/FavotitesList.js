import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem'
import { activeQuery, activeResult, activeSort, activeSearch } from '../../actions/QueryActions'
import { editFavorites, removeFavorites } from '../../actions/FavoritesQuery'
import AddFavorite from '../../components/AddFavorite/AddFavorite'
import './FavotitesList.scss'

class FavoritesList extends Component {

  state ={
    modalWindow: false,
    save: false,
    title: '',
    stateId: 0,
    num: 12,
    actQuery: '',
    actSort: 'noSort'
  }

  dataFavorite = () =>{
    let save = []
    const { users, activeLogin } = this.props
    users.map(us =>{
      if (us.login === activeLogin){
        save = us.saveInquiries
      }
      return us
    })
    return save
  }

  titleFavorite = ({target: {value}}) => {
    this.setState ({
      title: value
    })
  }

  //Modal Window

  modalAct = () =>{
    this.setState(prevState => ({
      modalWindow: !prevState.modalWindow
    }));
  }

  activeClear = () =>{
    const { activeQuery, activeResult, activeSort } = this.props
    this.modalAct()
    activeQuery('')
    activeResult(12)
    activeSort('noSort')
  }

  queryFavorit = (elemId) =>{
    const dataFavorite = this.dataFavorite()
    const { activeQuery, activeResult, activeSort, activeSearch } = this.props
    dataFavorite.map(data =>{
      if(data.id===elemId){
        activeQuery(data.query)
        activeResult(data.numRes)
        activeSort(data.sort)
        activeSearch()
      }
      return data
    })
  }

  modalActData = (elemId) =>{
    const dataFavorite = this.dataFavorite()
    const { activeQuery, activeResult, activeSort } = this.props
    dataFavorite.map(data =>{
      if(data.id===elemId){
        activeQuery(data.query)
        activeResult(data.numRes)
        activeSort(data.sort)
        this.modalAct()
        this.setState({
          title: data.title,
          stateId: data.id, 
          num: data.numRes,
          actQuery: data.query,
          actSort: data.sort
        })
      }
      return data
    })
  }

  edFavorites = () =>{
    const { stateId, title } = this.state
    const { editFavorites, activeLogin, query, sort, result } = this.props
    editFavorites(stateId, query, title, sort, result, activeLogin)
    this.activeClear()
  }
  //  /Modal Window


  render(){
    const { save, modalWindow, title, num, actQuery, actSort } = this.state
    const { activeLogin, activeQuery, activeResult, activeSort, removeFavorites } = this.props
    const favoriteByUser = this.dataFavorite()
    return(
      <Fragment>
        <div className='favorite'>
          <div className='favorite__container'>
            <h1 className='favorite__header'>Избранное</h1>
              <div className='favorite__background'>
              <AddFavorite activeQuery={activeQuery} initialSort={actSort} selectSort={activeSort} numResults={activeResult} initTitle={title} maxResults={num} titleFavorite={this.titleFavorite} editFavorites={this.edFavorites} save={save} query={actQuery} isOpen={modalWindow} modalAct={this.activeClear} />
              {favoriteByUser.length ? 
                favoriteByUser.map(data =>(
                <div className='favorite__list'>
                  <FavoriteItem id={data.id} key={data.id} title={data.title} modalActData={this.modalActData}
                  activeLogin={activeLogin} removeFavorites={removeFavorites} queryFavorit={this.queryFavorit}
                  />
                </div>
                ))
                :
                <span>Нет сохраненных видео</span>
              }
            </div>
          </div>
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
    sort: state.sort,
    result: state.result,
  }), { activeQuery, activeResult, activeSort, editFavorites, removeFavorites, activeSearch })(FavoritesList)
