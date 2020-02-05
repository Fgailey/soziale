import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/Post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          class='form-control z-depth-1'
          name='text'
          rows='5'
          placeholder='Write something here...'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input
          type='submit'
          className='btn btn-deep-purple darken-4 btn-sm my-1'
          value='Submit'
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
