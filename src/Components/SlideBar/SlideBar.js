import React from 'react'

export default function SlideBar({url,Text,alt}) {
    return (
        <div>
        <img src={url} alt={alt}/>
        <form>
        <input type="text" name={Text} />
            </form>
        </div>
    )
}
