import slideReducer from './slide/slide.reducer'

import {combineReducers} from 'redux';
import chatReducer from './chat/chat.reducer';

export default combineReducers({
    slide:slideReducer,
    chat:chatReducer
});