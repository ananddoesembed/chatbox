import chatActionType from '../chat/chat.types'

export const chatAddItem = items =>({
type:chatActionType.ADD_ITEM,
payload:items
})

export const chatRemoveItem = items =>({
type:chatActionType.REMOVE_ITEM,
payload:items
})

export const chatCopyItem = items =>({
type:chatActionType.COPY_ITEM,
payload:items
})

export const ChatEdit = item =>({
type:chatActionType.EDIT_ITEM,
payload:item
})

export const removeDragItem=item=>({
    type:chatActionType.DRAG_ITEM_START,
    payload:item
})

export const chatChange = item =>({
    type:chatActionType.CHAT_CHANGE,
    payload:item
})