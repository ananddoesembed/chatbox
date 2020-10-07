import React from 'react'
import './Chat.css'

export default function Chat({url,alt,Text,editHandler,removeHandler,copyHandler}) {
    return (
        <div className='chat'>
        <img src={url} alt={alt} className='image'/>
        <span className='textcard'>{Text}</span>
        <div className='sidemenu'>
        <img src={'/assets/delete_outline-24px(1).svg'} alt={'delete'} className='sideimage' onClick={removeHandler}/>
        <img src={'/assets/content_copy-24px.svg'} alt={'copy'} className='sideimage' onClick={copyHandler}/>
        <img src={'/assets/create-24px.svg'} alt={'edit'} className='sideimage' onClick={editHandler} />
        <span className='sideimagetext'></span>
        </div>
        </div>
    )
}
