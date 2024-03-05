import React, { useState } from 'react'
import ChatList from '../ChatLIst/ChatList'
import ChatForm from '../ChatForm/ChatForm'
import { useTranslation } from 'react-i18next';

const ChatContainer = ({ handleClose }) => {
  const [messages, setMessages] = useState([])
  const { t, i18n } = useTranslation();

  return (
    <div className='position-absolute top-0 start-0 w-100 h-100vh bg-body-tertiary p-md-5 p-3'>
      {i18n.language == 'en' && <button className='border-0 p-2 float-end' onClick={() => {
        i18n.changeLanguage('ar')
      }}>AR</button>}
      {i18n.language == 'ar' && <button className='border-0 p-2 float-start' onClick={() => {
        i18n.changeLanguage('en')
      }}>EN</button>}
      <ChatList handleClose={handleClose} messages={messages} />
      <ChatForm messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default ChatContainer
