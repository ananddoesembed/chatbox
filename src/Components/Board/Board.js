import React from 'react'
import Card from '../Card/Card'
import './Board.css'
import ShopDatas from '../../Pages/Card.data'
export default function Board() {
    const {items} = ShopDatas
    return (
        <div className='board'>
            <div className='card-board'>
            {items.map(item=><Card id={item.id} symbol={item.symbol} Text={item.Text} url={item.path}/>)}
            
    
            </div>
            <div className='chat-board'>

            </div>
        </div>
    )
}
