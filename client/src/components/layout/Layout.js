import React, { Component } from "react";
import { USER_CONNECTED, LOGOUT } from "../../Events"
import LoginForm from '../loginform/LoginForm'
import io from 'socket.io-client'

const socketUrl = 'http://localhost:3001/chat'

export class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            user: null
        };
    }

    startUp() {
        this.initSocket()
        console.log('start up')
    }

    initSocket = () => {
        const socket = io(socketUrl);
        socket.on('connect', ()=>{
            console.log("Connected");
        })
        this.setState({socket})
    }

    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user}) 
    }

    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }

    render() {
        const {title} = this.props
        const {socket} = this.state
        return(
            <div className="container">
                <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        )
    }
}

export default Layout;