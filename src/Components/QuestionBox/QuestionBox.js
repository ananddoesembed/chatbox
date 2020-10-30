import React from 'react'
import MessageBox from '../MessageBox/MessageBox';
import './QuestionBox.css'
export default function QuestionBox({name}) {
    const letter= name[0];
   
    return (
        <div className='messagebox'>
        <div className='avatarbox'>
        {letter}
        </div>
        <div> 
        <MessageBox />
        </div>
          
        </div>
    )
}
