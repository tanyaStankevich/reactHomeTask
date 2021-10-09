import React, {Component} from 'react';


import { Input, TextField } from "@material-ui/core";


import {
ThemeProvider,
useTheme,
createMuiTheme,
} from "@material-ui/core/styles";
import MessageList from './MessageList';


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


const messageList = [];



export default class MessageChat extends React.Component{
  constructor(props) {
    super(props);

       this.state =
    {
      author: this.props.author,
      messageAuthor: this.props.messageAuthor,
     
    };
    
  }

  
  updatePolAut = (event) => {
   event.preventDefault();
    this.setState((state) => {
      const newAuthor = event.target.value;
     
      return {
      
        author: newAuthor,
      }
    
    }
    
    );
  
  }

  updatePol = (event) => {   
    
   event.preventDefault();
    this.setState((state)=>{
      
      const newMessageAuthor = event.target.value;
     
      return {
        
        messageAuthor: newMessageAuthor
      }
    }
    );
   
  }
  
  render() {
    
 
    return (
    <ThemeProvider theme={theme}>
    <div className='frag'>
      
     
      <div>
      
      <form >
      <p>Input your name</p>
      <TextField focused='true' id="outlined-basic" label="Your name" size="small" style={{ margin: '20px' }} variant="outlined" value={this.state.author} onChange={this.updatePolAut}/>
      {/* <input type='text' value={this.author} onChange={this.updatePolAuth}></input> */}
      <p>Input your message</p>
      <TextField id="outlined-basic" label="Your message" size="small" style={{ margin: '20px' }} variant="outlined" value={this.state.messageAuthor} onChange={this.updatePol}/>
      </form>
     
            <MessageList author={this.state.author} messageAuthor={this.state.messageAuthor} />
                </div>
   </div> 
    </ThemeProvider>
        );
        
}
}
