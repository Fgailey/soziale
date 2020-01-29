import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='lightWool py-5'>
        <div className='container'>
          <div className='card pl-5 pr-5 py-5'>
            <div className='row mx-1'>
              <div className='col-md-6 mb-4'>
                {/* Card */}
                <div
                  className='card card-image'
                  style={{
                    backgroundImage:
                      'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
                  }}
                >
                  {/* Content */}
                  <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                    <div>
                      <h5 className='pink-text'>
                        <i className='fas fa-chart-pie' /> Marketing
                      </h5>
                      <h3 className='card-title pt-2'>
                        <strong>This is the card title</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!.
                      </p>
                      <Link to='#!' className='btn btn-pink'>
                        <i className='fas fa-clone left' /> View project
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className='col-md-6 mb-4'>
                {/* Card */}
                <div
                  className='card card-image'
                  style={{
                    backgroundImage:
                      'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
                  }}
                >
                  {/* Content */}
                  <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                    <div>
                      <h5 className='pink-text'>
                        <i className='fas fa-chart-pie' /> Marketing
                      </h5>
                      <h3 className='card-title pt-2'>
                        <strong>This is the card title</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!.
                      </p>
                      <Link to='#!' className='btn btn-pink'>
                        <i className='fas fa-clone left' /> View project
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
