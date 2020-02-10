import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../../pages/loadingGif/Loader';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPostsByUser } from '../../actions/Post';

const PostsProfile = ({ getPostsByUser, post: { posts, loading } }) => {
  useEffect(() => {
    getPostsByUser();
  }, [getPostsByUser]);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <div className='d-flex justify-content-center mb-0 pt-2'>
        <h2 className='prim'>Your Posts</h2>
        <i className='fas fa-user-circle prim'></i>
      </div>
      <PostForm />
      <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

PostsProfile.propTypes = {
  getPostsByUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostsByUser })(PostsProfile);
