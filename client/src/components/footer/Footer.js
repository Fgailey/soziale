import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter color='mdb-color darken-1' className='font-small pt-4 mt-auto'>
      <MDBContainer fluid className='text-center text-md-left pb-3'>
        <MDBRow>
          <MDBCol md='6' className='pl-5 pr-5'>
            <h5 className='title mb-1 text-left'>More Info.</h5>
            <div
              className='border-bottom border-info mb-2'
              style={{ width: 60 }}
            />
            <p className='mb-0 text-left'>
              Click on the buttons over yonder to see our source code on Github
              and to reach out to us with any questions, comments, or concerns.
            </p>
          </MDBCol>
          <MDBCol md='6' className='pl-5 pr-5'>
            <h5 className='title mb-1 text-left'>Site Links</h5>
            <div
              className='border-bottom border-info mb-2'
              style={{ width: 60 }}
            />
            <MDBContainer fluid className='d-flex justify-content-start pl-0'>
              <li className='list-unstyled'>
                <a href='https://github.com/Fgailey/Reach'>
                  <MDBBtn outline color='warning' size='sm' className='ml-0'>
                    Github
                  </MDBBtn>
                </a>
              </li>
              <li className='list-unstyled'>
                <Link to='/picture'>
                  <MDBBtn outline color='warning' size='sm' className='ml-0'>
                    Picture Upload
                  </MDBBtn>
                </Link>
              </li>
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
  );
};

export default Footer;
