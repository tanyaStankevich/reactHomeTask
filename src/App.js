import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';


const messageText = 'Have a nice chat';
const messageList = [];

//const messageChat = [];


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =
    {
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
    
     
      messageList.push(this.state );
      console.log(messageList)
      this.setState({    
      author: 'Bot',
      messageAuthor:'I am bot'
    }
    );
    }
  
    
    


  
  render() {
    
 
  return (
  
      <div>
      <h3 className='app'>Welcome to myMessanger</h3>
      <Message mes={messageText} />
      <p>Input your name</p>
      <input type='text' value={this.author} onChange={this.updatePolAuth}></input>
      <p>Input your message</p>
      <input type='text' value={this.messageAuthor} onChange={this.updatePol}></input>
      <button type='button' onClick={this.update}>Send</button><p>чтобы получить ответ бота дважды нажмите на кнопку</p>
      <ul>Ваш чат {messageList.map((mes) => (<li>Отправитель {mes.author} Сообщение { mes.messageAuthor}</li>))}</ul>
      </div>  
    
    
  );
}
}


