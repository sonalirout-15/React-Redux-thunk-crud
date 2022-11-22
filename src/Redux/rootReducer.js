import {combineReducers} from 'redux'
import adminReducers from './reducer'

const rootReducer = combineReducers({
    admin : adminReducers
})

export default rootReducer;