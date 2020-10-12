import {createSelector} from 'reselect'

const selectChat = state => state.chat



export const selectChatItemPreview = createSelector([selectChat],chat=>chat.chatArray)