import React from 'react'
import './Navbar.css'
import NavItem from '../NavItem/NavItem'
import DATAS from './Navbar.data'



export default function Navbar() {
    const {items} =DATAS
    return (
        <div  className='navbar' >
             <ul className='navbar-nav' >
             {items.map(item=><NavItem key={item.id} url={item.path} name={item.alt} />)}
            
            
            
            </ul> 
        </div>
    )
}
