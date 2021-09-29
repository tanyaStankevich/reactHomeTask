import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import ListChat from './ListChat.js';
import Button from '@material-ui/core/Button';

import { TextField } from "@material-ui/core";

import { nanoid } from 'nanoid';
import {
ThemeProvider,
useTheme,
createMuiTheme,
} from "@material-ui/core/styles";


const theme = createMuiTheme({
palette: {
primary: {
main: "#FF9800",
},
secondary: {
main: "#0098FF",
},
},
});


const messageText = 'Have a nice chat';
const messageList = [];


//const messageChat = [];


export default class App extends React.Component{
  constructor(props) {
    super(props);

    this.state =
    {
      id:'',
      author: '',
      messageAuthor: ''
    };
   
    this.update = this.update.bind(this.state);
    this.updatePol = this.updatePol.bind(this.state);
  
  }

  updatePolAuth = (event) => {
    this.setState({
     
      author: event.target.value
    
    }
    );
  }
  updatePol = (event) => {
    this.setState({
            
       messageAuthor: event.target.value
    
    }
    );
  }

  update = (event) => {
    
    this.state.id = nanoid();
    messageList.push(this.state );
    console.log(messageList);

    
      this.setState({    
      author: 'Bot',
      messageAuthor:'I am bot'
    }
    );
    }
  
    
    


  
  render() {
    
 
    return (
    <ThemeProvider theme={theme}>
    <div className='frag'>
      
      <ListChat />
      <div>
      <h3 className='app'>Welcome to myMessanger</h3>
      <Message mes={messageText} />
      <p>Input your name</p>
      <TextField focused='true' id="outlined-basic" label="Your name" size="small" style={{ margin: '20px' }} variant="outlined" value={this.author} onChange={this.updatePolAuth} inputRef={this.textInput}/>
      {/* <input type='text' value={this.author} onChange={this.updatePolAuth}></input> */}
      <p>Input your message</p>
      <TextField id="outlined-basic" label="Your message" size="small" style={{ margin: '20px' }} variant="outlined" value={this.messageAuthor} onChange={this.updatePol}/>
      {/* <input type='text' value={this.messageAuthor} onChange={this.updatePol}></input> */}
      <Button variant="contained" color="primary" type='button' style={{ margin: '20px' }} onClick={this.update}>
      Send
    </Button>
      <p>чтобы получить ответ бота дважды нажмите на кнопку</p>
      <ul>Ваш чат {messageList.map((mes) => (<li key={mes.id}>Отправитель {mes.author} Сообщение { mes.messageAuthor}</li>))}</ul>
      </div>  
   </div> 
    </ThemeProvider>
        );
        
}
}
