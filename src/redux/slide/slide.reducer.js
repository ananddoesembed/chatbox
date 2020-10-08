import slideActiontType from './slide.types';

const INITIAL_STATE ={
    slidestateShow:false
}


const slideReducer = (state=INITIAL_STATE,action) =>{

    switch(action.type){
        case slideActiontType.SET_SLIDE_STATE:
            return{
                ...state,
                slidestateShow : !state.slidestateShow
            } ;
       default:
           return state; 
    }

}
export default slideReducer;