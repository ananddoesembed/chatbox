import React from 'react'
import { Link } from 'react-router-dom'

import './NavItem.css'
export default function NavItem(props) {

    return (
        <li className='nav-item' >
        <Link className='nav-link' to='/'>
        {console.log(props.url)}
        <img src={props.url} style={{height:'30px',width:'30px'}} alt='build'/>
           <span className='link-text'>{props.name}</span>
        </Link>
    </li>
            
        
    )
}
