import './App.css';
import React from 'react';

import Chat from './routes/Chat/Chat';
import Router from './routes/Routes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';



//const messageChat = [];


export default function App() {
  
  
  


  
  
    
 
  return (
    
    <BrowserRouter>
      <Header />
      <Router />
      <Chat />
      </BrowserRouter>
    
  );

}


