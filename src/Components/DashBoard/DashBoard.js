import React from 'react'
import './DashBoard.css'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'
export default function DashBoard() {
    return (
        <div className='dashboard'>
            <Navbar/>
            <Board/>
        </div>
    )
}
