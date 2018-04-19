// author: DELL
// created:2018/4/19 13:17
import {combineReducers} from 'redux'
import account from './account';
import user from './user';

const rootReducer = combineReducers({
    user: user,
    account: account
})
export default rootReducer
