import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';


const messageText='Have a nice chat';

function App (){
    const [messageList, setMessageList] = useState([]);

   const updatePolAuth = (event) => {
    this.setState({
            
      author: event.target.value
    
    }
    );
  }
  const updatePol = (event) => {
    this.setState({
            
      
      messageAuthor: event.target.value
    
    }
    );
  }

  const update = (event) => {
    
    
      messageList.push(this.state );
    console.log(messageList);
    console.log(messageList.map);
    }
    return (
      <div>
      <h3 className='app'>Welcome to myMessanger</h3>
      <Message mes={messageText} />
      <p>Input your name</p>
      <input type='text' value={this.author} onChange={this.updatePolAuth}></input>
      <p>Input your message</p>
      <input type='text' value={this.messageAuthor} onChange={this.updatePol}></input>
      <button type='button' onClick={this.update}>Send</button>
      <ul>{messageList.map((mes) => (<li>{mes.author}, { mes.messageAuthor}</li>))}</ul>
      </div>
  );
}

export default App;
