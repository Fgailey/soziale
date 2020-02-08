import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/Post';
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import Emoji from '../emoji/emojiPicker'
import SmilePic from '../emoji/smily.png'


const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(false);

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

      <div onClick={()=>setToggle(true)}><img className='smilyPic' src={SmilePic} alt="Smiley face" /></div>
      <MDBContainer>
      <MDBModal size="sm" side position="bottom-right" toggle={()=>setToggle(false)} isOpen={toggle}>
        <MDBModalBody>
          <Emoji appendEmoji={(emoji) => setText(text+emoji)}/>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>

    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
