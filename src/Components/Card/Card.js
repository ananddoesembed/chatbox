import React from 'react'
import './Card.css'
export default function Card({Text,alt,url,clickHandler}) {
    return (   
        <div className='card' onClick={clickHandler}>
        <img src={url} alt={alt} className='image'/>
        <span className='textcard'>{Text}</span>
        </div>       
    )
}
