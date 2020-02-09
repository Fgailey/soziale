import React, { Fragment} from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { setRoom } from '../../actions/Chat_action';

const ChatFriendsItem = (props) => {

  let { profile } = props

  let { user } = profile

  let  { _id, name, avatar } = user

  const handleChangeRoom = (e) => {
    e.preventDefault();
    props.dispatch(setRoom(props.user._id, _id))
      console.log('changeRoom')
  }
  
    let lastChat = props.chats.chats.filter(chat => chat.sender._id === _id && props.chats.room === chat.type)
    
    let mostRecentChat = lastChat.pop()
    if(mostRecentChat === undefined){
      mostRecentChat = {message: "No Recent Messages", createdAt:""}
    }
    console.log(mostRecentChat)
  
  return (
    <Fragment>

    {(props.user._id === _id)?
    null
    :
    <li className="active lighten-3 p-2" id={_id}>
      <div className="d-flex justify-content-between" onClick={handleChangeRoom}>
      {(!avatar)?
        <img src={"/uploads/default.png"} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1" />
        :
        <img src={"/uploads/"+avatar} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1" />

      }
        <div className="text-small">
          <strong>{name}</strong>
          <p className="last-message text-muted">{mostRecentChat.message}</p>
        </div>
        <div className="chat-footer">
          {(!mostRecentChat.createdAt)
          ?
          <p className="text-smaller text-muted mb-0">N/A</p>
          :
          <p className="text-smaller text-muted mb-0"><Moment fromNow>{mostRecentChat.createdAt}</Moment></p>
          }
        </div>
      </div>
    </li>
    }
    
    </Fragment>
  );
};

// ChatFriendsItem.propTypes = {};

const mapStateToProps = state => ({
  chats: state.chats,
  user: state.auth.user
});

export default connect(mapStateToProps)(ChatFriendsItem);