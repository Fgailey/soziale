import React, { Component } from "react";
import io from "socket.io-client"
import moment from "moment"
import Message from "../components/message/Message"
// import getChats from "../reducers/chat_reducer"
// import Layout from '../components/layout/Layout'
// import store from '../store';
import {getChats, afterPostMessage} from "../actions/Chat_action"
import { loadUser } from '../actions/Auth';
import {connect} from "react-redux"
class Chat extends Component {
  state= {
    chatMessage: ""
}

  useEffect() {
    this.props.dispach(loadUser())
    console.log(this.props) 
  }

  componentDidMount() {
    let server = "http://localhost:5000";

    this.props.dispatch(getChats());

    this.socket = io(server);

    this.socket.on("Output Chat Message", messageFromBackEnd => {

        console.log(messageFromBackEnd)

        this.props.dispatch(afterPostMessage(messageFromBackEnd));
    })
}


handleSearchChange =(e) => {
    this.setState({
        chatMessage: e.target.value
    })
}

submitChatMessage = (e) => {
    e.preventDefault();


    // console.log(this.props)
    let chatMessage = this.state.chatMessage
    let userID = this.props.user._id
    let userName = this.props.user.name;
    // let userImage = this.props.user.userData.image;
    let nowTime = moment();
    let type = "Image"

    this.socket.emit("Input Chat Message", {
        chatMessage,
        userID,
        userName,
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

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    chats: state.chat
  }
}

export default connect(mapStateToProps)(Chat);