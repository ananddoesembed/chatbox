import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';

import './Chat.css'


export default function Chat({index,id,url,alt,Text,editHandler,removeHandler,copyHandler,moveCard}) {


  const style=
    {width:'90%',
        boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        margin:'1.5%',
        borderRadius:'15px',
        height:'40px',
        transition:'200ms',
        fontSize:'15px',
        cursor:'move'

        }

        
  
        const ref = useRef(null);
        const [, drop] = useDrop({
            accept: 'card',
            hover(item, monitor) {
                if (!ref.current) {
                    return;
                }
                const dragIndex = item.index;
                const hoverIndex = index;
                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                    return;
                }
                // Determine rectangle on screen
                const hoverBoundingRect = ref.current?.getBoundingClientRect();
                // console.log(hoverBoundingRect)
                // Get vertical middle
                const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                // Determine mouse position
                const clientOffset = monitor.getClientOffset();
                // Get pixels to the top
                const hoverClientY = clientOffset.y - hoverBoundingRect.top;
                // Only perform the move when the mouse has crossed half of the items height
                // When dragging downwards, only move when the cursor is below 50%
                // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }
                // Time to actually perform the action
                moveCard(dragIndex, hoverIndex);
                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                item.index = hoverIndex;
            },
        });
        const [{ isDragging }, drag] = useDrag({
            item: { type: 'card', id, index },
            collect: (monitor) => ({
                // isDragging: monitor.isDragging(),
            }),
        });
        const opacity = isDragging ? 0 : 1;
        drag(drop(ref));

      

        
    
    return (
        <div ref={ref}  style={{...style,opacity}} 
      >
        <img src={url} alt={alt} className='image'/>
        <span className='textcard'>{Text}</span>
        <div className='sidemenu'>
        <img src={'/assets/delete_outline-24px(1).svg'} alt={'delete'} className='sideimage' onClick={removeHandler}/>
        <img src={'/assets/content_copy-24px.svg'} alt={'copy'} className='sideimage' onClick={copyHandler}/>
        <img src={'/assets/create-24px.svg'} alt={'edit'} className='sideimage' onClick={editHandler} />
        <span className='sideimagetext'></span>
        </div>
        </div>
    )
}


