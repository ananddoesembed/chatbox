import slideActiontType from './slide.types';

const INITIAL_STATE ={
    slidestateShow:false,
    slideComponent:{}
}


const slideReducer = (state=INITIAL_STATE,action) =>{

    switch(action.type){
        case slideActiontType.SET_SLIDE_STATE:
            return{
                ...state,
                slidestateShow : !state.slidestateShow
            } ;
            case slideActiontType.SET_SLIDE_COMPONENT:
                // console.log(action.payload)
                const {previewItem,index} = action.payload
                 previewItem.idx = index
                 const newcomponent = previewItem
                return{
                    ...state,
                    slideComponent : newcomponent
                } ;
                
       default:
           return state; 
    }

}
export default slideReducer;