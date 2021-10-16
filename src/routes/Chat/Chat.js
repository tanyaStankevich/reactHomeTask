import React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Message from '../../Message.js';
import { getChat } from "../../store/chat/selectorChat.js";
import { store } from "../../store/index.js";
import { getMessages } from "../../store/messages/selectorMessage.js";
import { nanoid } from 'nanoid';

const messageText = 'Have a nice chat';


export default function Chat () {

  // const action = useSelector((state) => {
  //     return state;
  // });
 
  const dispatch = useDispatch();
  const [chatId, setChatId] = useState;
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [nameChat, setNameChat] = useState('');

  const chats = getChat(store);
  const messages = getMessages(store);

  const handleChangeAuthor = useCallback((e) => {
      setAuthor(e.target.value);
  }, []);

  const handleChangeMessage = useCallback((e) => {
      setMessage(e.target.value);
  }, []);

  const handleChangeNameChat = useCallback((e) => {
    setNameChat(e.target.value);
    setChatId(nanoid(4))
  }, []);


  const chatAdd = useCallback((nameChat) => {
    
    dispatch(chatAdd(nameChat))
  }, [dispatch, nameChat],
  
  );

  const chatRemove = useCallback(() => {
    dispatch(chatRemove(chatId))
  }, [dispatch, chatId],
  
  );
  
   const messageAdd = useCallback(() => {
    dispatch(messageAdd(message, author))
  }, [dispatch, message, author],
  
);

    return (
        <div className='frag'>
         
        {/* <ListChat /> */}
           
    
          <Message mes={messageText} />
        <h3 className='app'>Welcome to myMessanger</h3>

        <div className='listChat'>
          <input type='text' key={chatId} value={nameChat} onChange={ handleChangeNameChat }/>
            <button  onClick={chatAdd} >Add chat</button>
            <button onClick={chatRemove}>Remove chat</button>
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