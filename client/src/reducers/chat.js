import {
    GET_CHATS,
    AFTER_POST_MESSAGE,
    GET_NEW_ROOM,
    GET_DEFAULT_ROOM
} from '../actions/Types';
 
export default function(state={},action){
    
    switch(action.type){
        case GET_CHATS:
            return {...state, chats: action.payload }
        case AFTER_POST_MESSAGE:
            return {...state, chats: state.chats.concat(action.payload)}
        case GET_NEW_ROOM:
            return {...state, room: action.payload }
        case GET_DEFAULT_ROOM:
            return {...state, room: action.payload }
        default:
            return state;
    }
} 