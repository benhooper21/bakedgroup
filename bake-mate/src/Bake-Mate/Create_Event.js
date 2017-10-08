import React, { Component } from 'react';
import {addPost as addPost} from './firebase';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';

class Create_event extends Component{

  constructor(props) {
   super(props);
   this.state = {
     name:"",
   }
   this.send_event = this.send_event.bind(this);
   this.changeText = this.changeText.bind(this);

  }

  send_event(){
    addPost(this.state.name);
    console.log('Done boi');
  }

  changeText(e){
    this.setState({name:e.target.value});
  }

  render(){
    return(
      <div>
      <h1> Create Event!</h1>
      <TextField
       hintText="Name"
       onChange={this.changeText}
       value={this.state.name}
       >
      </TextField>
      <FlatButton
      onClick={this.send_event}
      >
      Create Event
      </FlatButton>
      </div>
    );
  }

}
export default Create_event;
