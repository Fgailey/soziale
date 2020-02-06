import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/Profile';
import ChatFriendsItem from "./ChatFriendsItem";

const ChatFriends = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div>

          
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ChatFriendsItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
    </div>
  );
}

ChatFriends.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(ChatFriends);