import React from 'react'
import QuestionBox from '../QuestionBox/QuestionBox'
import './ChatBox.css'

 
export default function ChatBox({name,color}) {
    return (
        <div className='chatHeadStyle' style={{backgroundColor:`${color}`}}>
          <div className='text'>
          {name}
         </div>
         <div className='chatBox'>
          <div className='avatar'>

          </div>
          <div className='chatspace'>
          <QuestionBox name={name}/>
          </div>
         </div>
         <div className='input'>
           <input style={{width:'80%'}}/>
           <div className='send-button'>
             >
           </div>
         </div>
        </div>
    )
}
