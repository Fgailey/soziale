import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/Post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='card lightBGcolor my-3 p-3'>
    <div className='d-flex justify-content-start'>
      <img
        className='avatar rounded-circle'
        src={`/uploads/${avatar}`}
        alt=''
      />
      <Link to={`/profile/${user._id}`} className='text-warning'>
        <h4 className='ml-2'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='mb-1 mt-2 p-2 border border-dark sec roundedz'>{text}</p>
      <p className='font-weight-bold'>
        Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn blue-gradient btn-sm'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn purple-gradient btn-sm'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn aqua-gradient btn-sm'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='badge badge-danger ml-1'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user._id === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger btn-sm'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
