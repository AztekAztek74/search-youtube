import { ACTIVE_QUERY, ACTIVE_SEARCH, ACTIVE_RESULT, ACTIVE_SORT, DISABLED_SEARCH } from '../actions/QueryActions'

const initialQuery = ''
const initialIsSearch = false
const initialResult = 12
const initialSort = 'noSort'

export const query = (state = initialQuery, action) =>{
    switch (action.type){
        case ACTIVE_QUERY:
            return action.value
        default: return state
    }
}

export const isSearch = (state = initialIsSearch, action) =>{
    switch (action.type){
        case ACTIVE_SEARCH:
            return true
        case DISABLED_SEARCH:
            return false
        default: return state
    }
}

export const result = (state = initialResult, action) =>{
    switch (action.type){
        case ACTIVE_RESULT:
            return action.numResult
        default: return state
    }
}

export const sort = (state = initialSort, action) =>{
    switch (action.type){
        case ACTIVE_SORT:
            return action.sort
        default: return state
    }
}

