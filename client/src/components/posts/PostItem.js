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
  post: { _id, text, name, user, likes, comments, date },
  showActions
}) => (
  <div className='card blue-grey lighten-4 my-2'>
    <div className='p-2 my-1'>
      <div className='d-flex justify-content-start'>
        <img
          className='avatar'
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          alt='stock-pic'
        />
        <Link to={`/profile/${user}`}>
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>

        {showActions && (
          <Fragment>
            <button
              onClick={() => addLike(_id)}
              type='button'
              className='btn btn-success btn-sm'
            >
              <i className='fas fa-thumbs-up' />{' '}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type='button'
              className='btn btn-warning btn-sm'
            >
              <i className='fas fa-thumbs-down' />
            </button>
            <Link to={`/posts/${_id}`} className='btn btn-primary btn-sm'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className="badge badge-danger ml-1">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
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
