import React,{useState} from 'react'
import './Messagebox.css'
export default function MessageBox() {
    const [val,setVal] = useState(false)
    if(val === false){setTimeout((val)=>{
       setVal(!val)
    },2000);}
    return (
        <div className='textbox'>
            {val?<div className='text'>hello afjnafnlkdsnlksn dklfnlsdkn;gnsd;gn;dnf;nkdnf'aklfn;adlkfm';dflfkn</div>
           :<div className='loadingbox'>
                <div className='dot1'/>
                <div className='dot2'/>
                <div className='dot3'/>
                </div>}
        </div>
    )
}
