import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/Post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='text-center'>
        <h4>Respond to this post below</h4>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
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

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
