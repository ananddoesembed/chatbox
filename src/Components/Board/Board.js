import React,{useState} from 'react'
import Card from '../Card/Card'
import './Board.css'
import ShopDatas from '../../Pages/Card.data'
import Chat from '../Chat/Chat'
import { connect } from 'react-redux'
import {setSlideState,setSlideComponent} from '../../redux/slide/slide.action'
import {chatAddItem,chatRemoveItem,chatCopyItem,removeDragItem,chatChange} from '../../redux/chat/chat.action'
import {selectChatItemPreview} from '../../redux/chat/chat.select'
import ChatBox from  '../ChatBox/ChatBox'


const Board=({previewItems,chatAddItems,removeItem,copyItem,setSlideStates,removeDrag,onDragHandler,chatChages})=> {
    const {items} = ShopDatas
    const [chatButton,setChatButton] = useState(false)
    const style={
    
      position:'fixed',
    width:'75px',
    height:'30px',
    bottom:'40px',
    right:'40px',
    backgroundColor:'rgb(102, 102, 235)',
    color:'#FFF',
    borderRadius:'10px',
    textAlign:'center',
      boxShadow: '2px 2px 3px #999',
      fontSize:'12px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      cursor:'pointer',
      
  
  }
    
  const moveCard = (dragIndex, hoverIndex) => {

    


      chatChages({dragIndex,hoverIndex});
   
  }
  console.log(items)
    return (
            <div className='board' draggable={true}>
                <div className='card-board'>
                {items.map(item=><Card key={item.id} Text={item.Text}
                url={item.path} clickHandler={()=>chatAddItems(item)}/>)
                
                }
                {/* console.log(items) */}
                </div>
                <div className='chat-board'>
                {
                  previewItems.map((previewItem,index)=><Chat moveCard={moveCard} index={index}
                   id={previewItem.id} key={index} url={previewItem.path} Text={previewItem.Text} 
                     removeHandler={()=>removeItem(index)} copyHandler={()=>copyItem({previewItem,index})} 
                    editHandler={()=>setSlideStates({previewItem,index})}  
                     
                  />)
                }
                
                </div> 
                <div style={style} onClick={()=>setChatButton(!chatButton)}>
            Preview</div>
       {chatButton? 
        <ChatBox name={'Mark'} color={'#ececec'}/>:null}
            </div>
            
           
          
          
    )
}
const mapDispatchToProps = dispatch =>({
  setSlideStates:item=>dispatch(setSlideState(),dispatch(setSlideComponent(item))),
  chatAddItems:item=>dispatch(chatAddItem(item)),
  removeItem:item=>dispatch(chatRemoveItem(item)),
  copyItem:item=>dispatch(chatCopyItem(item)),
  removeDrag:item=>dispatch(removeDragItem(item)),
  chatChages:item=>dispatch(chatChange(item))
})
const mapStateToProps = state =>({
  previewItems:selectChatItemPreview(state)
  })

export default connect(mapStateToProps,mapDispatchToProps)( Board)