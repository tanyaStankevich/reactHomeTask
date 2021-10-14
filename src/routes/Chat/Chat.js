import React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Message from '../../Message.js';
import { getChat } from "../../store/chat/selectorChat.js";
import { store } from "../../store/index.js";
import { getMessages } from "../../store/messages/selectorMessage.js";
import { nanoid } from 'nanoid';

const messageText = 'Have a nice chat';


export default function Chat (props) {

  // const action = useSelector((state) => {
  //     return state;
  // });
 
  const dispatch = useDispatch();
  const [chatId, setChatId] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [nameChat, setNameChat] = useState('');

  const resetAuthor = () => setAuthor('');
  const resetMessage = () => setMessage('');
  const resetNameChat = () => setNameChat('');
  
  const chats = getChat;
  const messages = getMessages;

  const handleChangeAuthor = useCallback((e) => {
      setAuthor(e.target.value);
  }, []);

  const handleChangeMessage = useCallback((e) => {
      setMessage(e.target.value);
  }, []);

  const handleChangeNameChat = useCallback((e) => {
    setNameChat(e.target.value);
    
  }, []);


  const chatAdd = useCallback((nameChat) => {
    
    dispatch(chatAdd(nameChat))
  }, [dispatch, nameChat],
     resetNameChat()
  );

  const chatRemove = useCallback(() => {
    dispatch(chatRemove(chatId))
  }, [dispatch, chatId],
  
  );
  
   const messageAdd = useCallback(() => {
    dispatch(messageAdd(message, author))
  }, [dispatch, message, author],
  resetAuthor(), resetMessage(),
  );
  
  const addMessageWithThunk = (chatID, message) => (dispatch, getState) => {
    dispatch(messageAdd(chatId, message));
    if (message.author !== 'BOT') {
      const botMessag = 'i am bot';
      setTimeout(() => dispatch(messageAdd(chatId, botMessag)), 2000);
    }
  };
  
  const onAddMessage = useCallback((message) => {
    dispatch(addMessageWithThunk(chatId, message));[chatId, dispatch]
  });


    return (
        <div className='frag'>
         
        {/* <ListChat /> */}
           
    
          <Message mes={messageText} />
        <h3 className='app'>Welcome to myMessanger</h3>

        <div className='listChat'>
          <input type='text' key={chatId} value={nameChat} onChange={ handleChangeNameChat }/>
            <button  onClick={chatAdd} >Add chat</button>
            <button onClick={chatRemove(chatId)}>Remove chat</button>
        </div>

        <div className='listMessage'>
          <input type='text' value={author} onChange={ handleChangeAuthor }/>
          <input type='text' value={message} onChange={handleChangeMessage}/>
            <button onClick={messageAdd}>Send</button>
            
        </div>

          {/* <MessageChat author={author} messageAuthor={messageAuthor} /> */}
        
        
      </div>
      
    )
}