import React, { Fragment, Component } from 'react';
import VidyoConnector from '../VidyoConnector';
import registerServiceWorker from '../registerServiceWorker';
import axios from 'axios';

const host = getUrlParameterByName('host', 'prod.vidyo.io');
// const tokens             = this.state.token;
const resourceId = getUrlParameterByName('resourceId', 'demoRoom');
const displayName = getUrlParameterByName('displayName', 'Guest');
const useNativeWebRTC = getUrlParameterByName('useNativeWebRTC', true);

loadRemoteVidyoClientLib(useNativeWebRTC, false);

const viewId = 'renderer';
const viewStyle = 'VIDYO_CONNECTORVIEWSTYLE_Default';
const remoteParticipants = 8;
const logFileFilter = 'warning all@VidyoConnector info@VidyoClient';
const logFileName = '';
const userData = '';

registerServiceWorker();

function loadRemoteVidyoClientLib(useNativeWebRTC = false, plugin = false) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://static.vidyo.io/latest/javascript/VidyoClient/VidyoClient.js?onload=onVidyoClientLoaded&useNativeWebRTC=${useNativeWebRTC}&plugin=${plugin}&webrtcLogLevel=info`;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function getUrlParameterByName(name, _default = '') {
  let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return (
    (match && decodeURIComponent(match[1].replace(/\+/g, ' '))) || _default
  );
}

class vidyo extends Component {
  state = {
    token: ''
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/vidyoToken/getToken`).then(res => {
      this.setState({ token: res.data.token });
    });
    
    if( window.localStorage )
    {
      if( !localStorage.getItem('firstLoad') )
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }  
      else
        localStorage.removeItem('firstLoad');
  }   
}
  

 render () {
        const {token} = this.state
        return token.length >0 ?     
    
        <Fragment>
                <div className='container-fluid'>
                <VidyoConnector
                  host={host}
                  token={this.state.token}
                  resourceId={resourceId}
                  displayName={displayName}
                  viewId={viewId}
                  viewStyle={viewStyle}
                  remoteParticipants={remoteParticipants}
                  logFileFilter={logFileFilter}
                  logFileName={logFileName}
                  userData={userData}
                />
              </div>
            </Fragment>
     : (
        <div>Loading Vidyo...</div>
        )
    }
}

export default vidyo;
