import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import "./ChatList.css"
import avatar from "./../../images/avatar.gif"
import { useTranslation } from 'react-i18next';


const ChatList = ({ handleClose, messages }) => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='close_icon'>
                <IoCloseCircle onClick={handleClose} className="fs-1 text-danger" />
            </div>
            <h3 className='text-center'>{t('greetting')}</h3>
            <div>
                <img src={avatar} className='Avatar_icon d-block mx-auto' />
            </div>
            <div className='messages-list'>
                {messages.length >= 1 ? (
                    <>
                        {messages.map((item) => (
                            <>
                                {item.type === "text" && <p className="p-4 bg-white my-3 border">{item.data}</p>}
                                {item.type === "image" && <div className='my-3 border p-4 bg-white'><img src={URL.createObjectURL(item.data)} alt="Chat image" className='chat_image d-block' /></div>}
                                {item.type === "audio" && <div className='my-3 border p-4 bg-white'><audio src={URL.createObjectURL(item.data)} controls /></div>}
                            </>
                        ))}
                    </>
                ) : (
                    <h4 className='mt-5'>{t('noMessage')}</h4>
                )}
            </div>
        </>
    )
}

export default ChatList
