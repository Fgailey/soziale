import React, { Component, Fragment} from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import Layout from '../components/layout/Layout';
import { getChats, afterPostMessage, setRoomDefault } from '../actions/Chat_action';
import { connect } from 'react-redux';
import ChatFriends from '../components/chatFriends/ChatFriends';
import Emoji from '../components/emoji/emojiPicker'
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import SmilePic from '../components/emoji/smily.png'

class Chat extends Component {
  state = {
    chatMessage: '',
    room: 'community',
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  updateChatMessage(emoji){
    this.setState({
      chatMessage: this.state.chatMessage + emoji
    })
  }

  componentDidMount() {
    let server =
      'https://project3-reach.herokuapp.com/' || 'http://localhost:5000/';
      // sets the chat to default page
      this.props.dispatch(setRoomDefault())

    //this call old chat messages from the mongo server
    this.props.dispatch(getChats());

    this.socket = io(server);

    this.socket.on('Output Chat Message', messageFromBackEnd => {
      console.log(messageFromBackEnd);
      console.log('This is from backend');

      this.props.dispatch(afterPostMessage(messageFromBackEnd));
    });
  }

  componentDidUpdate() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' }); 
  }

  handleSearchChange = e => {
    this.setState({
      chatMessage: e.target.value
    });
  };

  handleRoomChange = (e) => {
    e.preventDefault();
    this.props.dispatch(setRoomDefault())
  }

  renderCards = () =>
    this.props.user &&
    this.props.chats.chats &&
    this.props.chats.chats.map(chat => <Layout key={chat._id} {...chat}/>);

  submitChatMessage = e => {
    e.preventDefault();

    let chatMessage = this.state.chatMessage;
    let userID = this.props.user._id;
    let userName = this.props.user.name;
    let nowTime = moment();
    let type = this.props.chats.room;

    this.socket.emit('Input Chat Message', {
      chatMessage,
      userID,
      userName,
      nowTime,
      type
    });
    this.setState({ chatMessage: '' });
  };

  render() {
    return (
      <Fragment>
        <div className='container my-5'>
          <div className='card'>
            <span className='text-center blue lighten-3'>
              <h2>Chat Page</h2>
            </span>
            <div className='row px-lg-2 px-2'>
              <div className="col-md-6 col-xl-4 px-0">
                <h6 className="font-weight-bold mb-3 text-center text-lg-left">Member</h6>
                <div className="white z-depth-1 px-3 pt-3 pb-0">
                  <ul className="list-unstyled friend-list">
                  <li className="active grey lighten-3 p-2" id='community'>
                    <div className="d-flex justify-content-between" onClick={this.handleRoomChange}>
                      <div className="text-small">
                        <strong>Community Chat</strong>
                        {/* <p className="last-message text-muted">Hello, Are you there?</p> */}
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Just now</p>
                        {/* <span className="badge badge-danger float-right">1</span> */}
                      </div>
                    </div>
                  </li>
                    <ChatFriends/>
                    
                  </ul>
                </div>
              </div>

            
              <div
                className='col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0'
                style={{ height: '500px', overflowY: 'scroll' }}
              >
              {/* <div className="col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0"> */}

                <div className="chat-message">

                  <ul className="list-unstyled chat">

                  { this.props.chats && this.renderCards()}
                  <div
                    ref={el => {
                      this.messagesEnd = el;
                    }}
                    style={{ float: 'left', clear: 'both' }}
                  />  
                  </ul>
              </div>
              </div>
            </div>
          </div> {/* End ROW */}
              <form>
                {/* <form onSubmit={this.submitChatMessage}> */}
                <input
                  id='message'
                  placeholder='Type here to message'
                  className='w-100'
                  type='text'
                  value={this.state.chatMessage}
                  onChange={this.handleSearchChange}
                  style={{fontSize: 20, height: '100px', wordBreak: 'break-word' }}
                />
                <button
                  type='submit'
                  onClick={this.submitChatMessage}
                  htmltype='submit'
                  className='btn btn-info btn-rounded btn-sm waves-effect waves-light float-right'
                >
                  Submit
                </button>
                <div onClick={this.toggle}><img className='smilyPic' src={SmilePic} alt="Smiley face" /></div>
              </form>
        </div>

        <MDBContainer>
        <MDBModal size="sm" side position="bottom-right" isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalBody>
          <Emoji appendEmoji={this.updateChatMessage.bind(this)}/>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>


      </Fragment>
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
