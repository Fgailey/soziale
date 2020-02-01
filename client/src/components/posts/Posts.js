import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../pages/loadingGif/Loader';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/Post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='lightWool py-5'>
        <div className='container'>
          <div className='card p-5'>
            <h1 className='text-center'><span className="badge badge-primary">Posts</span></h1>
            <p className='lead'>
              <i className='fas fa-user' /> Welcome to the community
            </p>
            <PostForm />
            <div className='posts'>
              {posts.map(post => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
