import React from 'react'
import './Navbar.css'
import  Settings from '../../assets/settings.svg'
import  Integrate from '../../assets/statistics.svg'
import Logout from '../../assets/logout.svg'
import NavItem from '../NavItem/NavItem'
import Build from '../../assets/sketch.svg'
import Call from '../../assets/call.svg'
import Money from '../../assets/dollar.svg'

export default function Navbar() {
    return (
        <div className='navbar'>
             <ul className='navbar-nav'>
            <NavItem url={Build} name={'Build'}/>
            <NavItem url={Integrate} name={'Integrate'}/>
            <NavItem url={Settings} name={'Settings'}/>
            <NavItem url={Call} name={'Contact'}/>
            <NavItem url={Money} name={'PurChase'}/>
            <NavItem url={Logout} name={'Logout'}/>
            
            </ul> 
        </div>
    )
}
