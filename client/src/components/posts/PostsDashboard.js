import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../pages/loadingGif/Loader';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPostsByUser } from '../../actions/Post';

const PostsDashboard = ({ getPostsByUser, post: { posts, loading } }) => {
  useEffect(() => {
    getPostsByUser();
  }, [getPostsByUser]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='d-flex justify-content-center mb-0'>
        <span className='badge badge-primary'>Communinal Posts</span>
      </h1>
      <hr className='my-5' />
      <h3 className='text-center elegant-color-text mb-2'>
        Welcome, feel free to comment below.
      </h3>
      <h5 className='text-center deep-orange-text mb-0 mt-2'>
        Please keep it civil and be kind to your fellow users. Rude and hateful
        comments will be removed at our discretion.
      </h5>
      <hr className='my-5' />
      <PostForm />
      <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

PostsDashboard.propTypes = {
  getPostsByUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPostsByUser })(PostsDashboard);
