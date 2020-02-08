// Individual profile
import React from 'react';
import { connect } from 'react-redux';

import { setRoom } from '../../actions/Chat_action';

const ChatFriendsItem = (props) => {

  let { profile } = props

  let { user } = profile

  let  { _id, name } = user

  const handleChangeRoom = (e) => {
    e.preventDefault();
    props.dispatch(setRoom(props.user._id, _id))
      console.log('changeRoom')
  }
  
  
  return (

    <li className="active lighten-3 p-2" id={_id}>
      <div className="d-flex justify-content-between" onClick={handleChangeRoom}>
        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1" />
        <div className="text-small">
          <strong>{name}</strong>
          <p className="last-message text-muted">Hello, Are you there?</p>
        </div>
        <div className="chat-footer">
          <p className="text-smaller text-muted mb-0">Just now</p>
          {/* <span className="badge badge-danger float-right">1</span> */}
        </div>
      </div>
    </li>
    
  );
};

ChatFriendsItem.propTypes = {};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ChatFriendsItem);