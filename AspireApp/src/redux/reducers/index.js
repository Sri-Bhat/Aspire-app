import {combineReducers} from 'redux';
import * as debitcardDetails from './debitCard';
// TODO : import all reducers and combain

const reducer = combineReducers(Object.assign(debitcardDetails));

export default reducer;
