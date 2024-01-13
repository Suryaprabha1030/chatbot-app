import React from 'react'
import{Person,ChatDots} from "react-bootstrap-icons"
function Botmsg(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
        {
        props.user ?(
            <span className='msg-right'>
            <span className='text' >{props.messages}</span>
            <Person className='icon'/>
           
            </span>
        ):(
            <span className='msg-left'>
                   <ChatDots className='icon'/>
                <span  className='text'>
                    {props.messages} 
                 
                    
                </span>
            </span>
        )
    }
    </div>
  )
}

export default Botmsg