import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './Header.css'
const Header = () => {
    const [sign,setSign]=useState(false)
    return (
        <div className='header'>
            <img src={Logo} className='logo-container' alt='LogoHere'/>
            
            <div className='options'>
                <span className='option'>Pricing</span>
                <Link to='/dashboard' className='option'>
                Contact
                </Link>
                <span className='option'>Login</span>
                <span className='signUP' onClick={()=>setSign(!sign)}>{sign?'SignUP':'SignOut'}</span>
            </div>
           

            
        </div>
    )
}

export default Header;
