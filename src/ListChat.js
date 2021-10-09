import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import Button from '@material-ui/core/Button';
import { Router, Link, useParams, Redirect, useRouteMatch } from "react-router-dom";
import { TextField } from "@material-ui/core";

import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core"; 
import { arrChat }  from './NameChat'
import Chat from './routes/Chat/Chat';
import MessageList from './MessageList';

export default function ListChat(props) {
  const { arrChatName } = useParams();
    
  const chat = arrChat.find(({ name }) => name === arrChatName);
  
  console.log(arrChatName);


  // if (!chat) {
  //   return <Redirect to='*' />
  // }
    
   return (
    <div>
    <p>Your chat with:</p>
     <List sx={{ width: '100%', maxWidth: 360,  color: 'black' }}>
         {arrChat.map((chat) => (
      
     <Link to={`./Chat/routes/:${chat.name}` }>
      <ListItem className='listitem' className='link'>
         
        <ListItemText primary={chat.name} />
       
      </ListItem>
           </Link>
           
    ))}
       </List>
       
       {/* <Router exact path='./Chat/routes/:arrChatName/message' component={Message}>

       </Router> */}
       
       
    </div>
       );
       
}