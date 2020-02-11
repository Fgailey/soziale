import {
    GET_CHATS,
    AFTER_POST_MESSAGE,
    GET_NEW_ROOM,
    GET_DEFAULT_ROOM
} from '../actions/Types';
 
export default function(state={loading: true},action){
    
    switch(action.type){
        case GET_CHATS:
            return {...state, loading: false, chats: action.payload }
        case AFTER_POST_MESSAGE:
            return {...state, loading: false, chats: state.chats.concat(action.payload)}
        case GET_NEW_ROOM:
            return {...state, loading: false, room: action.payload }
        case GET_DEFAULT_ROOM:
            return {...state, loading: false, room: action.payload }
        default:
            return state;
    }
} 