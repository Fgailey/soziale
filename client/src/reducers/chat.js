import {
    GET_CHATS,
    // GET_PRIVATE_CHATS,
    AFTER_POST_MESSAGE
} from '../actions/Types';
 
export default function(state={},action){
    
    switch(action.type){
        case GET_CHATS:
            return {...state, chats: action.payload }
        case AFTER_POST_MESSAGE:
            return {...state, chats: state.chats.concat(action.payload)}
        // case GET_PRIVATE_CHATS:
        //     return {...state, chats: action.payload }
        default:
            return state;
    }
} 