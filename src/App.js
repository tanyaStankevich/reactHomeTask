import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Router from './routes/Routes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';




//const messageChat = [];


export default function App() {
  
  
  


  
  
    
 
  return (
    <BrowserRouter>
      <Header />
      <Router />
    
      </BrowserRouter>
  );

}


