// Individual profile
import React from 'react';

const ChatFriendsItem = ({
  profile: {
    user: { _id, name, avatar }
  }
}) => {
  return (
    <div className='profile-item' id={_id}>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

ChatFriendsItem.propTypes = {};

export default ChatFriendsItem;