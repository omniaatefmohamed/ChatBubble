import React from 'react'
import { BsFillChatTextFill } from "react-icons/bs";
import './ChatIcon.css'

const ChatIcon = ({ handleShow }) => {

    return (
        <>
            <BsFillChatTextFill className='chat-icon position-absolute bottom-0 me-4 mb-4' onClick={handleShow} />
        </>
    )
}

export default ChatIcon
