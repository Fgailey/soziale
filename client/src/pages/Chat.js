import React, { Component } from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import Layout from '../components/layout/Layout';
import { getChats, afterPostMessage } from '../actions/Chat_action';
import { connect } from 'react-redux';
// import VidyoConnector  from './vidyo'

class Chat extends Component {
  state = {
    chatMessage: ''
  };

  componentDidMount() {
    let server =
      'https://project3-reach.herokuapp.com/' || 'http://localhost:5000/';

    //this call old chat messages from the mongo server
    this.props.dispatch(getChats());

    this.socket = io(server);

    this.socket.on('Output Chat Message', messageFromBackEnd => {
      console.log(messageFromBackEnd);
      console.log('This is from backend');

      this.props.dispatch(afterPostMessage(messageFromBackEnd));
    });
  }

  handleSearchChange = e => {
    this.setState({
      chatMessage: e.target.value
    });
  };

  renderCards = () =>
    this.props.chats.chats &&
    this.props.chats.chats.map(chat => <Layout key={chat._id} {...chat} />);

  submitChatMessage = e => {
    e.preventDefault();

    let chatMessage = this.state.chatMessage;
    let userID = this.props.user._id;
    let userName = this.props.user.name;
    // let userImage = this.props.user.userData.image;
    let nowTime = moment();
    let type = 'Image';

    this.socket.emit('Input Chat Message', {
      chatMessage,
      userID,
      userName,
      // userImage,
      nowTime,
      type
    });
    this.setState({ chatMessage: '' });
  };

  render() {
    return (
      <div>
        <span>Chat Page </span>

        {/* <VidyoConnector/> */}

        <div>
          <div
            className='infinite-container'
            style={{ height: '500px', overflowY: 'scroll' }}
          >
            {this.props.chats && this.renderCards()}
            <div
              ref={el => {
                this.messagesEnd = el;
              }}
              style={{ float: 'left', clear: 'both' }}
            />
          </div>
          <form>
            {/* <form onSubmit={this.submitChatMessage}> */}
            <input
              id='message'
              placeholder='Type here to message'
              type='text'
              value={this.state.chatMessage}
              onChange={this.handleSearchChange}
            />
            <button
              type='submit'
              onClick={this.submitChatMessage}
              htmltype='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    chats: state.chats
  };
};

export default connect(mapStateToProps)(Chat);
