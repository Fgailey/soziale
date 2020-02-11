import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/Post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className='card lightBGcolor p-3 my-3'>
    <div className='d-flex justify-content-start'>
      <img
        className='avatar rounded-circle'
        src={`/uploads/${avatar}`}
        alt=''
      />
      <Link to={`/profile/${user}`} className='text-warning'>
        <h4 className='ml-2'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='mb-1 mt-2 p-2 border border-dark sec roundedz'>{text}</p>
      <p className='font-weight-bold'>
        Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
      </p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger btn-sm'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
