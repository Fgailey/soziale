import axios from 'axios';

import {
    GET_CHATS,
    AFTER_POST_MESSAGE,
    GET_NEW_ROOM,
    GET_DEFAULT_ROOM
} from './Types';
import { CHAT_SERVER } from '../components/Config.js';

export function getChats(){
    const request = axios.get(`${CHAT_SERVER}/getChats`)
        .then(response => response.data);
    
    return {
        type: GET_CHATS,
        payload: request
    }
}


export function setRoom(user1, user2){
    const roomID = user1+user2
    const newRoom = roomID.split('').sort().join('')

    
    return {
        type: GET_NEW_ROOM,
        payload: newRoom
    }
}
export function setRoomDefault(){

    return {
        type: GET_DEFAULT_ROOM,
        payload: "community"
    }
}


export function afterPostMessage(data){

    return {
        type: AFTER_POST_MESSAGE,
        payload: data
    }
}