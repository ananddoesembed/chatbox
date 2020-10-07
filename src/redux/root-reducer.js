import slideReducer from './slide/slide.reducer'

import {combineReducers} from 'redux';

export default combineReducers({
    slide:slideReducer
});