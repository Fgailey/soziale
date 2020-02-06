// Individual profile
import React from 'react';

const ChatFriendsItem = ({
  profile: {
    user: { _id, name, avatar }
  }
}) => {
  return (

    <li className="active lighten-3 p-2" id={_id}>
      <a href="#" className="d-flex justify-content-between">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1" />
        <div className="text-small">
          <strong>{name}</strong>
          <p className="last-message text-muted">Hello, Are you there?</p>
        </div>
        <div className="chat-footer">
          <p className="text-smaller text-muted mb-0">Just now</p>
          {/* <span className="badge badge-danger float-right">1</span> */}
        </div>
      </a>
    </li>
    
  );
};

ChatFriendsItem.propTypes = {};

export default ChatFriendsItem;