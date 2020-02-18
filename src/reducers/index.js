import { combineReducers } from 'redux'
import { users } from './users'
import { entry } from './entry'
import { activeLogin } from './activeLogin'
import { query, isSearch, result, sort} from './query'

export const rootReducer = combineReducers({
    users,
    entry,
    activeLogin,
    query,
    isSearch,
    result,
    sort
})