import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter color='mdb-color darken-1' className='font-small pt-4 mt-auto'>
      <MDBContainer fluid className='text-center text-md-left pb-3'>
        <MDBRow>
          <MDBCol md='6' className='pl-5 pr-5'>
            <h5 className='title'>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md='6' className='pl-5 pr-5'>
            <h5 className='title'>Site Links</h5>
            <li className='list-unstyled'>
              <a href='https://github.com/Fgailey/Reach'>
                <MDBBtn outline color='primary' size='sm'>
                  Github
                </MDBBtn>
              </a>
            </li>
            <li className='list-unstyled'>
              <Link to='/picture'>
                <MDBBtn outline color='primary' size='sm'>
                  Picture Upload
                </MDBBtn>
              </Link>
            </li>
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
