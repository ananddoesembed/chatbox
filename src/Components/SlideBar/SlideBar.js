import React,{useState} from 'react'
import { connect } from 'react-redux'
import './SlideBar.css'
import {selectSetSlideShow} from '../../redux/slide/slide.select'
import {createStructuredSelector} from 'reselect'
import Button from '../Button/Button'
import {ChatEdit} from '../../redux/chat/chat.action'
import {setSlideState} from '../../redux/slide/slide.action'

const SlideBar = ({url,Text,setSlideState,setSlideShow,ChatEdits,idx}) => {

    const [values,setValue] = useState(' ')
    return (
        <div className='slide'>
        <div className={setSlideShow?'allSlide':'noneSlide'}>
        <img src={url} alt={'alt'} className='img'/>
        <form>
        <input   placeholder={Text} className={setSlideShow?'allip':'noneip'} onChange={e=>setValue(e.target.value)} />
            </form>
            </div>
            <div className='buttons'>
                <Button ClassName={'cancel'} ButtonName={'Cancel'} onClicked={setSlideState}/>
                <Button ClassName={'save'} ButtonName={'Save'}     onClicked={()=>ChatEdits({values,idx})}/>
            </div>
        
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    setSlideShow:selectSetSlideShow
})
const mapDispatchToProps = dispatch =>({
    setSlideState:()=>dispatch(setSlideState()),
    ChatEdits:item=>dispatch(setSlideState(),dispatch(ChatEdit(item))),
  })
export default connect (mapStateToProps,mapDispatchToProps)(SlideBar)