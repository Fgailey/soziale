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

                    <div id="chat-window">{title}
                        <p className="old-message">
                            <strong>{this.name} :</strong> {this.message}
                        </p>
                        <div className="output-div" id="output"></div>
                        <div className="feedback-div green center" id="feedback"></div>
                    </div>
                    <div>
                        <input id="message" type="text" placeholder="Message" />
                    </div>
                {/* <form onSubmit={this.handleSubmit} className="chat-form" >

                    <label htmlFor="nickname">
                        <h2>got a nickname?</h2>
                    </label>


                    <input
                        ref={(input) =>{ this.textInput = input}}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onchange={this.handleChange}
                        placeholder={'MyCoolUsername'}
                    />
                    <div className="error" >{error? error:null}</div>

                </form> */}
            </div>
        )
    }
}

export default Layout;