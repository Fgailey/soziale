
// // var axios = require ("axios")



//     axios.get("http://localhost:5000/vidyoToken/getToken").then(
//         function(response) {
//           // If the axios was successful...
//           // Then log the body from the site!
//         //   console.log(response.data.token);
//         response.data.token
       
//         },
      
//         function(error) {
//           if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//           } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an object that comes back with details pertaining to the error that occurred.
//             console.log(error.request);
//           } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log("Error", error.message);
//           }
//           console.log(error.config);
//         }
//       );






 
import React from 'react';

import axios from 'axios';

// var axios = require ("axios")

export default class PersonList extends React.Component {
  constructor() {
     let state = {
    tokenss: "yooooooooo"
  }
  console.log (state)
  }
  

  componentDidMount = () => {
    axios.get(`http://localhost:5000/vidyoToken/getToken`)
      .then((res) => {
        console.log(res.data.token) ;
        // this.setState({ tokenss:tokenss });
        
      })
  }
 
  render() {
    return (
       
      <ul>
        { this.state.tokenss.map(person => <li>{person.name}</li>)}
      
      </ul>

    )
  }
}
