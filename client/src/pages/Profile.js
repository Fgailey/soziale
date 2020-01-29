import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Fragment>
      <div className='lightWool py-5'>
        <div className='container'>
          <div className='card p-5'>
            <div className='row row-cols-1 row-cols-md-2'>
              <div className='col mb-4'>
                {/* Card */}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      className='card-img-top'
                      src='https://mdbootstrap.com/img/Photos/Others/images/16.jpg'
                      alt='Card cap'
                    />
                    <Link to='#!'>
                      <div className='mask rgba-white-slight' />
                    </Link>
                  </div>
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <button type='button' className='btn btn-light-blue btn-md'>
                      Read more
                    </button>
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className='col mb-4'>
                {/* Card */}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      className='card-img-top'
                      src='https://mdbootstrap.com/img/Photos/Others/images/16.jpg'
                      alt='Card cap'
                    />
                    <Link to='#!'>
                      <div className='mask rgba-white-slight' />
                    </Link>
                  </div>
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <button type='button' className='btn btn-light-blue btn-md'>
                      Read more
                    </button>
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className='col mb-4'>
                {/* Card */}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      className='card-img-top'
                      src='https://mdbootstrap.com/img/Photos/Others/images/16.jpg'
                      alt='Card cap'
                    />
                    <Link to='#!'>
                      <div className='mask rgba-white-slight' />
                    </Link>
                  </div>
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <button type='button' className='btn btn-light-blue btn-md'>
                      Read more
                    </button>
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className='col mb-4'>
                {/* Card */}
                <div className='card'>
                  {/*Card image*/}
                  <div className='view overlay'>
                    <img
                      className='card-img-top'
                      src='https://mdbootstrap.com/img/Photos/Others/images/16.jpg'
                      alt='Card cap'
                    />
                    <Link to='#!'>
                      <div className='mask rgba-white-slight' />
                    </Link>
                  </div>
                  {/*Card content*/}
                  <div className='card-body'>
                    {/*Title*/}
                    <h4 className='card-title'>Card title</h4>
                    {/*Text*/}
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                    <button type='button' className='btn btn-light-blue btn-md'>
                      Read more
                    </button>
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

export default Profile;
