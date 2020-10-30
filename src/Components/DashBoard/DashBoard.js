import React from 'react'
import './DashBoard.css'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'
import { connect } from 'react-redux'
import {selectSetSlideShow} from '../../redux/slide/slide.select'
import { setSlideState} from '../../redux/slide/slide.action'
import SlideBar from '../SlideBar/SlideBar'



const  DashBoard=({setSlideShow,setSlideState,slideComponent,idx})=> {
   
    return (
        <div>
        {setSlideShow?<div className='allsliderControl'>
            <div className='alloutbox' onClick={setSlideState}/>
            <div className='allslidebox'>
            <SlideBar Text={slideComponent.Text} url={slideComponent.path} idx={slideComponent.idx} />
            </div>
        </div>:<div className='nonesliderControl'>
            <div className='noneoutbox' onClick={setSlideState}/>
            <div className='noneslidebox'/>
        </div>}   
        <div className='dashboard'>
            <Navbar/>
            <Board/>
        </div>
       
        </div>
    )
}


const mapDispatchToProps = dispatch =>({
    setSlideState:()=>dispatch(setSlideState())
  })

  const mapStateToProps = state =>({
    setSlideShow:selectSetSlideShow(state),
    slideComponent:state.slide.slideComponent
    })
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard)
