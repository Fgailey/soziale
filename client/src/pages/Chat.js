import React, { Component } from "react";
import io from "socket.io-client"
import moment from "moment"
// import Layout from '../components/layout/Layout'

class Chat extends Component {
  state= {
    chatMessage: "",
}

componentDidMount() {
    let server = "http://localhost:5000";

    this.socket = io(server);

    this.socket.on("Output Chat Message", messageFromBackEnd => {
        console.log(messageFromBackEnd)
    })
}

hanleSearchChange =(e) => {
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

    this.socket.emit("Input Chat Message", {
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
          {/* <Layout title="Chat App" /> */}
          
        </div>
    </div>
  );
}
}

export default Chat;