import React from "react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHAT_ADD, CHAT_REMOVE } from "../../store/chat/actionsChat.js";
import { MESSAGE_ADD } from "../../store/messages/actionsMessage.js";
// import ListChat from '../../ListChat';
import Message from '../../Message.js';
import { getChatById } from "../../store/chat/selectorChat.js";

// import MessageChat from '../../MessageChat';
// import { arrChat } from './NameChat'

const messageText = 'Have a nice chat';


export default function Chat () {
  //  const author = '';
  // const messageAuthor = '';
  // const arrChatArr=[]

  const action = useSelector((state) => {
      return state;
  });
  
  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [nameChat, setNameChat] = useState('');

  const handleChangeAuthor = useCallback((e) => {
      setAuthor(e.target.value);
  }, []);

  const handleChangeMessage = useCallback((e) => {
      setMessage(e.target.value);
  }, []);

  const handleChangeNameChat = useCallback((e) => {
      setNameChat(e.target.value);
  }, []);


  const chatAdd = useCallback(() => {
    dispatch(chatAdd(nameChat))
  }, [dispatch, nameChat],
  
  );

  const chatRemove = useCallback(() => {
    dispatch(chatRemove(getChatById (chatId)))
  }, [dispatch, chatId],
  
  );
  
   const messageAdd = useCallback(() => {
    dispatch(messageAdd(message.message, message.author))
  }, [dispatch, message],
  
);

    return (
        <div className='frag'>
         
        {/* <ListChat /> */}
           
    
          <Message mes={messageText} />
        <h3 className='app'>Welcome to myMessanger</h3>

        <div className='listChat'>
          <input type='text' value='nameChat' onChange={ handleChangeNameChat }/>
            <button onClick={chatAdd}>Add chat</button>
            <button onClick={chatRemove}>Remove chat</button>
        </div>

        <div className='listMessage'>
          <input type='text' value={ message.author} onChange={ handleChangeAuthor }/>
          <input type='text' value={message.message} onChange={handleChangeMessage}/>
            <button onClick={messageAdd}>Send</button>
            
        </div>

          {/* <MessageChat author={author} messageAuthor={messageAuthor} /> */}
        
        
      </div>
      
    )
}