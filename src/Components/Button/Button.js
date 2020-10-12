import React from 'react'
import './Button.css'
export default function Button({ClassName,ButtonName,onClicked}) {
    let attachedClass = ['button',ClassName].join(' ')
    return (
        <div className={attachedClass} onClick={onClicked}>{ButtonName}
            
        </div>
    )
}
