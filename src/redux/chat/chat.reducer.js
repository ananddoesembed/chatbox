import chatActionType from '../chat/chat.types'
const INITIAL_STATE = {
    chatArray:[
        {
            id:0,
            alt:'Message',
            path:'/assets/chat-24px.svg',
            Text:'Message'
        },
        {
            id:0,
            alt:'Message',
            path:'/assets/chat-24px.svg',
            Text:'Message'
        }]
    }

const chatReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case chatActionType.ADD_ITEM:
             const ChatAddArray = [...state.chatArray]
             ChatAddArray.splice(ChatAddArray.length-1, 0, action.payload);
            return{
                
                ...state,
                
                chatArray:ChatAddArray
               
            }
        case chatActionType.REMOVE_ITEM:
            const chatRemoveArray = [...state.chatArray]
            chatRemoveArray.splice(action.payload, 1 );
            return{
                
                ...state,
                
                chatArray:chatRemoveArray
               
            }
            case chatActionType.COPY_ITEM:
            const {previewItem,index} = action.payload
            console.log(previewItem)
            const chatCopyArray = [...state.chatArray]
            chatCopyArray.splice(index, 0,previewItem );
            return{
                
                ...state,
                
                chatArray:chatCopyArray
               
            }
            case chatActionType.EDIT_ITEM:
            const {values,idx} = action.payload

            const chatEditArray = [...state.chatArray]
            chatEditArray[idx].Text = values
            return{
                
                ...state,
                
                chatArray:chatEditArray
               
            }
            default:
                return state
    }
}

export default chatReducer;