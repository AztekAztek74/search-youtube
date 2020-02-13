export const ADD_FAVORITES = 'ADD_FAVORITES'
export const EDIT_FAVORITES = 'EDIT_FAVORITES'
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES'

export const addFavorites = (id, query, title, sort, numRes, activeLogin ) =>{
    return{
        type: ADD_FAVORITES,
        id,
        query,
        title,
        sort,
        numRes,
        activeLogin
    }
}

export const editFavorites = (id, query, title, sort, numRes, activeLogin ) =>{
    return{
        type: EDIT_FAVORITES,
        id,
        query,
        title,
        sort,
        numRes,
        activeLogin
    }
}

export const removeFavorites = (id, activeLogin) =>{
    return{
        type: REMOVE_FAVORITES,
        id, 
        activeLogin
    }
}
