import React from 'react'
import Card from '../Card/Card'
import './Board.css'
import ShopDatas from '../../Pages/Card.data'
import Chat from '../Chat/Chat'
import { connect } from 'react-redux'
import {setSlideState,setSlideComponent} from '../../redux/slide/slide.action'
import {chatAddItem,chatRemoveItem,chatCopyItem} from '../../redux/chat/chat.action'
import {selectChatItemPreview} from '../../redux/chat/chat.select'


const Board=({previewItems,chatAddItems,removeItem,copyItem,setSlideStates})=> {
    const {items} = ShopDatas
    return (
            <div className='board'>
                <div className='card-board'>
                {items.map(item=><Card key={item.id} Text={item.Text}
                url={item.path} clickHandler={()=>chatAddItems(item)}/>)}
                </div>
                <div className='chat-board'>
                {
                  previewItems.map((previewItem,index)=><Chat key={previewItem.id} url={previewItem.path} Text={previewItem.Text} 
                    removeHandler={()=>removeItem(index)} copyHandler={()=>copyItem({previewItem,index})} editHandler={()=>setSlideStates({previewItem,index})}
                  />)
                }
                
                </div>     
            </div>
            
           
          
          
    )
}
const mapDispatchToProps = dispatch =>({
  setSlideStates:item=>dispatch(setSlideState(),dispatch(setSlideComponent(item))),
  chatAddItems:item=>dispatch(chatAddItem(item)),
  removeItem:item=>dispatch(chatRemoveItem(item)),
  copyItem:item=>dispatch(chatCopyItem(item))
})
const mapStateToProps = state =>({
  previewItems:selectChatItemPreview(state)
  })

export default connect(mapStateToProps,mapDispatchToProps)( Board)