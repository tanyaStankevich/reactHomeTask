import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import MessageChat from './MessageChat';
import ListChat from './ListChat';

const messageText = 'Have a nice chat';


//const messageChat = [];


export default function App() {
  
  const author = '';
  const messageAuthor = '';
  


  
  
    
 
  return (
   <div className='frag'>
   <ListChat />
      <div>
      <h3 className='app'>Welcome to myMessanger</h3>
      <Message mes={messageText} />
      <MessageChat author={author} messageAuthor={messageAuthor} />
    </div>
    </div>
  );

}


