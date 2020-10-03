import React from 'react'
import './Card.css'
export default function Card({Text,alt,url}) {
    return (   
        <div className='card'>
        <img src={url} alt={alt} className='image'/>
        <span className='textcard'>{Text}</span>
        </div>       
    )
}
