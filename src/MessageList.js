import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import { nanoid } from 'nanoid';
import MessageChat from './MessageChat';

import {
ThemeProvider,
useTheme,
createMuiTheme,
} from "@material-ui/core/styles";
// import { nanoid } from 'nanoid';



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

const arr = [];

export default class MessageList extends React.Component{
  constructor(props) {
    super(props);
    
    this.state =
    [{
        id: nanoid(),
        messageList: '',
        
    }];
     
  }
  update = (event) => {
    
    event.preventDefault();
    
    this.setState((state) => {
      const messageListNew = 'Отправитель  ' + this.props.author + '   Сообщение  ' + this.props.messageAuthor;
      let idNew = nanoid(6);
      
      return {
        id: idNew,
        messageList: messageListNew,
        
      }
    }, () => arr.push(this.state));
    
   
    console.log(arr);

    }    
  render() {
    
 
    return (
    <ThemeProvider theme={theme}>
    
      <Button variant="contained" color="primary" type='button' style={{ margin: '20px' }} onClick={this.update}>
      Send
    </Button>
     
        <ul>Ваш чат { arr.map((mes) => (<li key={mes.id}> {mes.messageList}</li>)) }</ul>
       
   
    </ThemeProvider>
        );
        
}
}
