import React, { Component, Fragment} from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import Layout from '../../components/layout/Layout';
import Loader from '../loadingGif/Loader';
import { getChats, afterPostMessage, setRoomDefault } from '../../actions/Chat_action';
import { getProfiles } from '../../actions/Profile';
import { connect } from 'react-redux';
import ChatFriends from '../../components/chatFriends/ChatFriends';
import Emoji from '../../components/emoji/emojiPicker'
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import SmilePic from '../../components/emoji/smily.png'
import './chat.css'

class Chat extends Component {
  state = {
    chatMessage: '',
    modal: false,
    active: false
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
    this.props.dispatch(getProfiles())

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
      {this.props.profile.loading ? (
        <Loader />
      ) : (
        <Fragment>
            <div className='text-center white-text' id='profilesHeader'>
              <h1 className='prim'>Chat page</h1>
              <h4 className='sec'>It's all about you here</h4>
            </div>
            <div className='aqua-gradient' id='borderBottom'></div>

        <div className='container my-5'>
          <div className='card darkBGcolor chatBoxContainer'>
          <div className='darkBGcolor' id='borderBottom'></div>
            <div className='row px-lg-0 px-0 mx-0'>
              <div className="col-md-5 col-xl-4 px-0 height-scroll borderSeperator scrollbar scrollbar-near-moon thin">
                <div className="z-depth-1 px-3 pt-3 pb-0">
                  <ul className="list-unstyled friend-list">
                  <li className="active darkBGcolor lighten-3 p-2 chatFriendHover" id='community'>
                    <div className="d-flex justify-content-between" onClick={this.handleRoomChange}>
                      <div className="text-small prim">
                        <strong title='Click here to return to community chat'>Community Chat</strong>
                      </div>
                      <div className="chat-footer">
                      <i class="fas fa-comments"></i>
                      </div>
                    </div>
                  </li>
                    <ChatFriends user={this.props.user}/>
                    
                  </ul>
                </div>
              </div>
              <div className='col-md-7 col-xl-8 pl-md-0 height-scroll px-lg-auto px-0 scrollbar scrollbar-near-moon thin'>
                <div className="chat-message card-background">
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
                <input
                  id='message'
                  placeholder='Type here to message'
                  className='w-100 chatBoxContainer mediumBGcolor sec pb-0 px-2'
                  type='text'
                  value={this.state.chatMessage}
                  onChange={this.handleSearchChange}
                  style={{fontSize: 20, height: '100px', wordBreak: 'break-word' }}
                />
          <div className='darkBGcolor' id='borderBottom'></div>
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
      )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    chats: state.chats,
    profile: state.profile
  };
};

export default connect(mapStateToProps)(Chat);
