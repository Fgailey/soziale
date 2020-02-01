import React, { Component } from "react";

// import state from  '../components/vidyo/tokenApi'
// import tokenss from '../components/vidyo/tokenApi';
import '../index.css';
import VidyoConnector from '../VidyoConnector';
import registerServiceWorker from '../registerServiceWorker';

import axios from 'axios';



// console.log("dfdfdjhhdhdhdhdhdh",state)
    

const host              = getUrlParameterByName("host", "prod.vidyo.io");
// const token             = this.state.tokenss;
const resourceId        = getUrlParameterByName("resourceId", "demoRoom");
const displayName       = getUrlParameterByName("displayName", "Guest");
const useNativeWebRTC   = getUrlParameterByName("useNativeWebRTC", true);

loadRemoteVidyoClientLib(useNativeWebRTC, false);

const viewId                = "renderer";
const viewStyle             = "VIDYO_CONNECTORVIEWSTYLE_Default";
const remoteParticipants    = 8;
const logFileFilter         = "warning all@VidyoConnector info@VidyoClient";
const logFileName           = "";
const userData              = "";



registerServiceWorker();

function loadRemoteVidyoClientLib(useNativeWebRTC = false, plugin = false) {
    let script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = `https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&useNativeWebRTC=${useNativeWebRTC}&plugin=${plugin}&webrtcLogLevel=info`;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function getUrlParameterByName(name, _default = '') {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || _default;
}



class vidyo extends Component {
   state= {
    token:[]
}

componentDidMount() {
  axios.get(`http://localhost:5000/vidyoToken/getToken`)
      .then((res) => {
       const token = (res.data.token) ;
      //  console.log (res.data.token)
        this.setState({ token:token});
      
      })
}





render(){

  return (
   
        <div>
        

        <VidyoConnector 
                    host        = { host }
                    token       = {this.state.token}
                    resourceId  = { resourceId }
                    displayName = { displayName }
                    viewId             = { viewId }
                    viewStyle          = { viewStyle }
                    remoteParticipants = { remoteParticipants }
                    logFileFilter      = { logFileFilter }
                    logFileName        = { logFileName }
                    userData           = { userData }
                />

{console.log('yooooooo', this.state.token)}
    </div>
  );
}
}



export default vidyo;
