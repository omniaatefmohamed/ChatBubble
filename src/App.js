import { Container } from 'react-bootstrap';
import './App.css';
import ChatContainer from './ChatComponents/ChatContainer/ChatContainer';
import ChatIcon from './ChatComponents/ChatIcon/ChatIcon';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false)
  document.body.dir = i18n.dir();

  // handle Show Chat Container
  const HandleShowChatContainer = () => {
    setShow(true)
  }

  // handle hide Chat Container
  const HandleHideChatContainer = () => {
    setShow(false)
  }
  return (
    <Container fluid className='h-100vh'>
      {show ? (<ChatContainer handleClose={HandleHideChatContainer}/>) : (<ChatIcon handleShow={HandleShowChatContainer}/>)}
    </Container>
  );
}

export default App;
