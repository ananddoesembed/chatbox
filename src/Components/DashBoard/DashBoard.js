import React from 'react'
import './DashBoard.css'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'
import { connect } from 'react-redux'
import {selectSetSlideShow} from '../../redux/slide/slide.select'
import {createStructuredSelector} from 'reselect'
import {setSlideState} from '../../redux/slide/slide.action'
const  DashBoard=({setSlideShow,setSlideState})=> {
    
    return (
        <div>
        {setSlideShow?
        <div className='all' onClick={setSlideState}>
        <div className='slidebar'>
        </div>
        </div>:
        <div className='dashboard'>
            <Navbar/>
            <Board/>
        </div>}
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    setSlideState:()=>dispatch(setSlideState())
  })

const mapStateToProps = createStructuredSelector({
    setSlideShow:selectSetSlideShow
})
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)
