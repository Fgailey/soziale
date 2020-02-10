import React, { Fragment, Component } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Footer extends Component {
  state = {
    modal: false,
    name: '',
    email: '',
    message: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: 'POST',
      url: '/send',
      data: {
        name: name,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        console.log('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        console.log('Message failed to send.');
      }
    });
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
 }

  render() {
    return (
      <Fragment>
        <MDBFooter
          color='mdb-color darken-1'
          className='font-small pt-4 mt-auto'
        >
          <MDBContainer fluid className='text-center text-md-left pb-3'>
            <MDBRow>
              <MDBCol md='6' className='pl-5 pr-5'>
                <h5 className='title mb-1 text-left'>More Info.</h5>
                <div
                  className='border-bottom border-info mb-2'
                  style={{ width: 60 }}
                />
                <p className='mb-0 text-left'>
                  Click on the buttons over yonder to see our source code on
                  Github and to reach out to us with any questions, comments, or
                  concerns.
                </p>
              </MDBCol>
              <MDBCol md='6' className='pl-5 pr-5'>
                <h5 className='title mb-1 text-left'>Site Links</h5>
                <div
                  className='border-bottom border-info mb-2'
                  style={{ width: 60 }}
                />
                <MDBContainer
                  fluid
                  className='d-flex justify-content-start pl-0'
                >
                  <li className='list-unstyled'>
                    <a href='https://github.com/Fgailey/Reach'>
                      <MDBBtn
                        outline
                        color='warning'
                        size='sm'
                        className='ml-0'
                      >
                        Github
                      </MDBBtn>
                    </a>
                  </li>
                  <li className='list-unstyled'>
                    <Link to='/picture'>
                      <MDBBtn
                        outline
                        color='warning'
                        size='sm'
                        className='ml-0'
                      >
                        Picture Upload
                      </MDBBtn>
                    </Link>
                  </li>
                  {/* Modal */}
                  <MDBBtn
                    outline
                    color='warning'
                    size='sm'
                    className='ml-0'
                    onClick={this.toggle}
                  >
                    Contact Us
                  </MDBBtn>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>
                      MDBModal title
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form
                        id='contact-form'
                        onSubmit={this.handleSubmit.bind(this)}
                        method='POST'
                      >
                        <div className='form-group'>
                          <label for='name'>Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id='name'
                          />
                        </div>
                        <div className='form-group'>
                          <label for='exampleInputEmail1'>Email address</label>
                          <input
                            type='email'
                            className='form-control'
                            id='email'
                            aria-describedby='emailHelp'
                          />
                        </div>
                        <div className='form-group'>
                          <label for='message'>Message</label>
                          <textarea
                            className='form-control'
                            rows='5'
                            id='message'
                          ></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                          Submit
                        </button>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={this.toggle}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                  {/* Modal */}
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className='footer-copyright text-center py-3'>
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <Link to='/'> Reach </Link>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Fragment>
    );
  }
}

export default Footer;
