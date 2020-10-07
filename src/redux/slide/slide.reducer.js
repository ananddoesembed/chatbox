
const INITIAL_STATE ={
    slidestate:false
}


const slideReducer = (state=INITIAL_STATE,action) =>{

    switch(action.type){
        case 'SET_SLIDE_STATE':
            return{
                ...state,
                slidestate : action.payload
            } ;
       default:
           return state; 
    }

}
export default slideReducer;