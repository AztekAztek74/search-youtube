import { LOG_IN } from '../actions/SessionActions';
import { load } from 'redux-localstorage-simple';
import { ADD_FAVORITES, EDIT_FAVORITES, REMOVE_FAVORITES } from '../actions/FavoritesQuery'

let USERS = load({ namespace: 'search_youtube' });

if (!USERS || !USERS.users || !USERS.users.length){
    USERS = {
        users: [],
    }
}

export const users = (state = USERS.users, action) => {
    switch (action.type){
        case LOG_IN:
            return[
                ...state, {
                    id: action.id,
                    login: action.login,
                    token: action.token,
                    saveInquiries: []
                }
            ]
            case ADD_FAVORITES:
                return [...state].map(us =>{
                    if (us.login === action.activeLogin){
                        us.saveInquiries.push({
                            id: action.id,
                            query: action.query,
                            title: action.title,
                            sort: action.sort,
                            numRes: action.numRes
                        })
                    }
                    return us
                })
            
            case EDIT_FAVORITES:
                return [...state].map(us =>{
                    if (us.login === action.activeLogin){
                        us.saveInquiries = us.saveInquiries.map(qu => 
                            qu.id === action.id ?
                            {...qu, 
                                query: action.query,
                                title: action.title,
                                sort: action.sort,
                                numRes: action.numRes
                            }:qu)
                    }
                    return us
                })

            case REMOVE_FAVORITES:
                return [...state].map(us =>{
                    if (us.login === action.activeLogin){
                        us.saveInquiries = us.saveInquiries.filter(quest => quest.id !== action.id)
                    }
                    return us
                })
        default: return state
    }
}