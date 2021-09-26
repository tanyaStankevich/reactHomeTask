import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';


const messageText='It is my first react app';

function App (){
  return (
      <div>
          <h3 className='app'>Hello!</h3>
          <Message mes={messageText} />
      </div>
  );
}

export default App;
