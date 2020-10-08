import React,{useReducer} from 'react'
import Card from '../Card/Card'
import './Board.css'
import ShopDatas from '../../Pages/Card.data'
import Chat from '../Chat/Chat'
import { connect } from 'react-redux'
import {setSlideState} from '../../redux/slide/slide.action'
const Board=({setSlideState})=> {
    
    
    const [myArray, dispatch] = useReducer((myArray, { type, value }) => {
        switch (type) {
          case "add":
            const myAddArray = [...myArray]
            myAddArray.splice(myAddArray.length-1,0,value.id)
            return myAddArray
          case "remove":
            const myRemoveArray = [...myArray]
            myRemoveArray.splice(value,1)
            return myRemoveArray
            case "copy":
            const myCopyArray = [...myArray]
            const {index,it} = value
            myCopyArray.splice(index,0,it.id)
            return myCopyArray
          default:
            return myArray;
        }
      }, [0,0]);

      
      
    const {items} = ShopDatas
    
   

    return (
        
            <div className='board'>
                <div className='card-board'>
                {items.map(item=><Card key={item.id} Text={item.Text}
                url={item.path} clickHandler={()=>dispatch({type:'add',value:item})}/>)}
                </div>
                <div className='chat-board'>
                {myArray.map(chatItem => items.find(item => chatItem === item.id)).map((it,index)=><Chat key={Math.random()} 
                 Text={it.Text} url={it.path}
                 removeHandler={()=>dispatch({type:'remove',value:index})} 
                 copyHandler={()=>dispatch({type:'copy',value:{index,it}})}
                 editHandler={setSlideState}
                 
                />)}
                </div>
               
                
            </div>
            
           
          
          
    )
}
const mapDispatchToProps = dispatch =>({
  setSlideState:()=>dispatch(setSlideState())
})


export default connect(null,mapDispatchToProps)( Board)