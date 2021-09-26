import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';


const messageText='It is my first react app';

function App (){
  // const [author, setAuthor] = useState([]);
  // const [message, setMessage] = useState([]);

  // const updateAuthor = (event) => {
  //   setAuthor(event.target.value);
  //   console.log(author);
  // }
  // const updateMes = (event) => {
  //   setMessage(event.target.value);
  //   console.log(message);
  // }

  return (
      <div>
          <h3 className='app'>Hello!</h3>
      <Message mes={messageText} />
      {/* <p>Имя отправителя</p><input type='text' author={author} onChangeAuthor={updateAuthor} />
      <p>Ваше сообщение</p><input type='text' message={message} onChange={updateMes} />
      <button type='button'>Отправить</button> */}
      </div>
  );
}

export default App;
