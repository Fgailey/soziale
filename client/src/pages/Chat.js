import React, { Component } from "react";
import io from "socket.io-client"
import moment from "moment"
import Message from "../components/message/Message"
// import getChats from "../reducers/chat_reducer"
// import Layout from '../components/layout/Layout'

class Chat extends Component {
  state= {
    chatMessage: "",
    output:[]
}

componentDidMount() {
    let server = "http://localhost:5000";

    // this.props.dispatch(getChats());

    this.socket = io(server);
    
    this.socket.on("chat", data => {
        let { output } = this.state
        console.log(data)
        console.log(output)
        // output = <Message incomingMessage={data.chatMessage} />
        output.push(data)

        let newOutput = output.map(x => <Message key={output.indexOf(x)} incomingMessage={x.chatMessage}/>)
        this.setState({output:newOutput})
    })
}

// componentDidUpdate() {
//   this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
// }

handleSearchChange =(e) => {
    this.setState({
        chatMessage: e.target.value
    })
}

submitChatMessage = (e) => {
    e.preventDefault();

    let chatMessage = this.state.chatMessage
    // let userId = this.props.user.userData._id
    // let userName = this.props.user.userData.name;
    // let userImage = this.props.user.userData.image;
    let nowTime = moment();
    let type = "Image"

    this.socket.emit("chat", {
        chatMessage,
        // userId,
        // userName,
        // userImage,
        nowTime,
        type
    });
    this.setState({ chatMessage: "" })
}
render(){

  return (
    <div>
        <span>Chat Page </span>
        <div>
          <div id="output">
          {this.state.output}
          </div>
          <form onSubmit={this.submitChatMessage}>
              <input 
                id="message"
                placeholder="Type here to message"
                type="text"
                value={this.state.chatMessage}
                onChange={this.handleSearchChange}
              />
              <button type="submit" onClick={this.submitChatMessage} htmltype="submit">Submit</button>
          </form>
        </div>
    </div>
  );
}
}

export default Chat;