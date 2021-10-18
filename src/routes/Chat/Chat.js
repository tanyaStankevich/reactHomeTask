import React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Message from '../../Message.js';
import { getChatList } from "../../store/chat/selectorChat.js";

import { getMessageList} from "../../store/messages/selectorMessage.js";
import { nanoid } from 'nanoid';
import { store } from "../../store/index.js";

const messageText = 'Have a nice chat';


export default function Chat (props) {

  // const action = useSelector((state) => {
  //     return state;
  // });
 
  const dispatch = useDispatch();
  let chatId = 0;
  const [chatIdDel, setChatIdDel] = useState(''); 
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [nameChat, setNameChat] = useState('');

  const resetAuthor = () => setAuthor('');
  const resetMessage = () => setMessage('');
  const resetNameChat = () => setNameChat('');
  
  const chats = getChatList(store);
  const messages = getMessageList(store);

  const handleChangeAuthor = useCallback((e) => {
      
    setAuthor(e.target.value);
  }, []);

  const handleChangeMessage = useCallback((e) => {
      setMessage(e.target.value);
  }, []);

  const handleChangeNameChat = useCallback((e) => {
    setNameChat(e.target.value);
    
  }, []);

  const handleChangeChatId = useCallback((e) => {
    setChatIdDel(e.target.value);
    
  }, []);


  const chatAdd = useCallback((chatId, nameChat) => {
    // chatId++;
    dispatch(chatAdd(chatId, nameChat))
  }, [dispatch,chatId, nameChat],
     
    //  resetNameChat()
  );

  const chatRemove = useCallback((chatIdDel) => {
    dispatch(chatRemove(chatIdDel))
  }, [dispatch, chatIdDel],
  
  );
  
   const messageAdd = useCallback((chatId, message) => {
    dispatch(messageAdd(chatId, message))
  }, [dispatch,author,message],
  // resetAuthor(), resetMessage(),
  );
  
  
  
  // const onAddMessage = useCallback((message) => {
  //   dispatch(addMessageWithThunk(chatId, message)),[dispatch, chatId]
  // });


    return (
        <div className='frag'>
         
        {/* <ListChat /> */}
           
    
          <Message mes={messageText} />
        <h3 className='app'>Welcome to myMessanger</h3>

        <div className='listChat'>
          Введите название чата для добавления
          <input type='text' value={nameChat} onChange={handleChangeNameChat} />
          <button  onClick={chatAdd} >Add chat</button>
          <br/>
          Введите id чата для удаления
           <input type='text' value={chatIdDel} onChange={handleChangeChatId} />
            
          <button onClick={chatRemove}>Remove chat</button>
          <ul>
            {
              chats.map(({ nameChat }) => <li key={chatId}>{chatId }{ nameChat}</li> )
            }
            
          </ul>
        </div>

        <div className='listMessage'>
          <p>Имя отправителя </p>
          <input type='text' value={author} onChange={handleChangeAuthor} />
           <p> Ваше сообщение </p>
          <input type='text' value={message} onChange={handleChangeMessage}/>
            <button onClick={messageAdd}>Send</button>
            <ul>
            {
              messages.map(({ id, message, author }) => <li key={id}>{id}{author}{message}</li> )
            }
            
          </ul>
        </div>
        
        <div>
          
      </div>
          {/* <MessageChat author={author} messageAuthor={messageAuthor} /> */}
        
        
      </div>
      
    )
}