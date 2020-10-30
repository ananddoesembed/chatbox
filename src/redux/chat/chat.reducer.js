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
            id:3,
        alt:'email',
        path:'/assets/email-24px.svg',
        Text:'Email'
        }]
    }

const chatReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case chatActionType.ADD_ITEM:
             const ChatAddArray = [...state.chatArray]
             const newpayload ={...action.payload}
             ChatAddArray.splice(ChatAddArray.length-1, 0, newpayload);
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
            const copiedItem={...previewItem}
            console.log(previewItem)
            const chatCopyArray = [...state.chatArray]
            chatCopyArray.splice(index, 0,copiedItem );
            return{
                
                ...state,
                
                chatArray:chatCopyArray
               
            }
            case chatActionType.EDIT_ITEM:
            const {values,idx} = action.payload

            const chatEditArray = [...state.chatArray]
            chatEditArray[idx].Text = values
            console.log('values',values)
            // console.log(chatEditArray,idx)
            return{
                
                ...state,
                
                chatArray:chatEditArray
               
            }
            case chatActionType.DRAG_ITEM_START:
                const DragItemStartArray = [...state.chatArray]
                DragItemStartArray.splice(action.payload,1)
                return{
                    ...state,
                    chatArray:DragItemStartArray
                }
            case chatActionType.CHAT_CHANGE:
                const chatChangeArray = [...state.chatArray]
                const {dragIndex,hoverIndex} = action.payload
                function array_move(arr, old_index, new_index) {
                    if (new_index >= arr.length) {
                        var k = new_index - arr.length + 1;
                        while (k--) {
                            arr.push(undefined);
                        }
                    }
                    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
                    return arr; // for testing
                };
                
                const newArray= array_move(chatChangeArray,dragIndex,hoverIndex)
                return{
                    chatArray:newArray
                }
            default:
                return state
    }
}

export default chatReducer;