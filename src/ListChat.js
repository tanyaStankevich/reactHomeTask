import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import Button from '@material-ui/core/Button';

import { TextField } from "@material-ui/core";

import { nanoid } from 'nanoid';
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";

export default function ListChat() {
  
    const arrChat =
    [{
      id: nanoid(),
      name: 'Татьяна'
      
        },
        {
      id: nanoid(),
      name: 'Николай'
      
        },
        {
      id: nanoid(),
      name: 'Артем'
      
        }
        
        ];
   

    
   return (
    <div>
    <p>Your chat with:</p>
     <List sx={{ width: '100%', maxWidth: 360,  color: 'black' }}>
    {arrChat.map((chat) => (
      <ListItem className='listitem'>
        <ListItemText primary={chat.name} inset='true'/>
     
      </ListItem>
    ))}
    </List>
    </div>
       );
       
}
