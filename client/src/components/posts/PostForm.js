import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/Post';
import { MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import Emoji from '../emoji/emojiPicker'
import SmilePic from '../emoji/smily.png'


const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(false);
  

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
        <input type='submit' className='btn btn-deep-purple darken-4 btn-sm my-1' value='Submit' />
      </form>

      <div onClick={()=>setToggle(true)}><img className='smilyPic' src={SmilePic} alt="Smiley face" /></div>
      <MDBContainer>
      <MDBModal size="sm" side position="bottom-right" toggle={()=>setToggle(false)} isOpen={toggle}>
        <MDBModalBody>
          <Emoji appendEmoji={(emoji) => setText(text+emoji+'hey')}/>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>

    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
