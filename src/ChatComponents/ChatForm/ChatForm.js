import React, { useState, useRef } from 'react'
import { Form, InputGroup, Row } from 'react-bootstrap'
import { FaMicrophone, FaImage } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './ChatForm.css'

const ChatForm = ({ messages, setMessages }) => {
    const { t, i18n } = useTranslation();
    const [messageType, setMessageType] = useState("");
    const [messageData, setMessageData] = useState(null);
    const [textInputData, setTextInputData] = useState("");
    const [audioFileName, setAudioFileName] = useState("");
    const [imageFileName, setImageFileName] = useState("");
    const [error, setError] = useState(false)
    const audiofileInputRef = useRef(null);
    const imagefileInputRef = useRef(null);

    // handle audio custom input
    const handleAudioClick = () => {
        audiofileInputRef.current.click()
    };

    // handle image custom input
    const handleImageClick = () => {
        imagefileInputRef.current.click()
    };

    // handle Text input value
    const HandleTextInputValue = (e) => {
        if (e.target.value != "") {
            setTextInputData(e.target.value)
            setMessageType("text");
            setMessageData(e.target.value);
            setError(false)
        } else {
            setError(true)
        }

    }

    // handle Image Change
    const HandleImageChange = (e) => {
        const imageFile = e.target.files[0];
        if (imageFile.type.startsWith("image/")) {
            setMessageType("image");
            setImageFileName(e.target.files[0].name)
            setMessageData(imageFile);
            setError(false)
        } else {
            setError(true)
        }
    }


    // handle audio files
    const HandleAudioChange = (e) => {
        const audioFile = e.target.files[0];
        if (audioFile.type.startsWith("audio/")) {
            setMessageType("audio");
            setMessageData(audioFile);
            setError(false)
            setAudioFileName(e.target.files[0].name)
        } else {
            setError(true)
        }
    };


    // handle save data into array
    const HandleAddData = (e) => {
        e.preventDefault();
        if (messageType && messageData) {
            const newMessage = {
                type: messageType,
                data: messageData,
            };
            setMessages([...messages, newMessage]);
            setMessageType("");
            setMessageData(null);
            setTextInputData("")
            setAudioFileName("")
            setImageFileName("")
            setError(false)
        } else {
            setError(true)
        }

    }
    return (
        <Form>
            <Row>
                <InputGroup className='bg-white border p-0 position-absolute bottom-0 start-0 end-0 d-flex align-items-center'>
                    <Form.Control type="text" className='bg-transparent border-0 w-50' placeholder={t('placeholder')} onChange={HandleTextInputValue} value={imageFileName || audioFileName || textInputData} />
                    <>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={HandleImageChange}
                            ref={imagefileInputRef}
                            style={{ display: "none" }}
                        />
                        <FaImage
                            className="custom-image-input fs-2 mx-3"
                            onClick={handleImageClick}
                        />
                    </>
                    <>
                        <Form.Control
                            type="file"
                            accept="audio/*"
                            onChange={HandleAudioChange}
                            ref={audiofileInputRef}
                            style={{ display: "none" }}
                        />
                        <FaMicrophone
                            className="custom-audio-input fs-2 mx-3"
                            onClick={handleAudioClick}
                        />
                    </>
                    <button type="submit" class="px-4 border-0 send-btn text-white fs-5" onClick={HandleAddData}>{t('sendBtn')}</button>
                </InputGroup>
            </Row>
            {error ? (<p className='alert alert-danger position-absolute top-0 w-100 start-0'> {t('errorMessage')} </p>) : null}
        </Form>
    )
}

export default ChatForm
