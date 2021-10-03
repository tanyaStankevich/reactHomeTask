import React from "react";
import { Router, Link } from "react-router";
import ListChat from '../../ListChat';
import Message from '../../Message.js';
import MessageChat from '../../MessageChat';
// import { arrChat } from './NameChat'

const messageText = 'Have a nice chat';
export default function Chat () {
   const author = '';
  const messageAuthor = '';
    return (
        <div className='frag'>
      
        <ListChat />
            <div>
    
                <Message mes={messageText} />
                  <h3 className='app'>Welcome to myMessanger</h3>
      <MessageChat author={author} messageAuthor={messageAuthor} />
        </div>
        {/* <Link to={/chat/${arrChat.id}}>
        
        </Link>
        
        
        <Router>

        </Router> */}
      </div>
      
    )
}