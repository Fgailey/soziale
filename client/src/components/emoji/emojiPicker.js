import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
 
const Emoji = (props) => {
    const [chosenEmoji, setChosenEmoji] = useState(null);
 
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        console.log('this one',emojiObject.emoji)
        props.appendEmoji(emojiObject.emoji)
    }
 
    return (
        
        <div>
            
            {/* { 
              chosenEmoji
                ? (<span>You chose: {chosenEmoji.emoji}</span>)
                : <span>No emoji Chosen</span>
 
            } */}
            <Picker onEmojiClick={onEmojiClick}/>
                
        </div>
    );
};
export default Emoji