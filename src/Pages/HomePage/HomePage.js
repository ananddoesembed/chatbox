import React from 'react'

import Header from '../../Components/Header/Header'

import {ReactComponent as BG} from '../../assets/backg.svg'

import './HomePage.css'

export default function HomePage() {
    return (
        <div className='HomePage'>
        <Header/>                                       {/* header coponent */}
        <BG className = 'background'/>                   {/* bbackground image */}
        </div>
    )
}
