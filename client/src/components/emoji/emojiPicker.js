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
         
            <Picker onEmojiClick={onEmojiClick}/>
                
        </div>
    );
};
export default Emoji

