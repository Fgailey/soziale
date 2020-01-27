import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Fragment>
      {/* Footer */}
      <footer className='page-footer font-small teal pt-4 sticky-bottom'>
        {/* Footer Text */}
        <div className='container-fluid text-center text-md-left'>
          {/* Grid row */}
          <div className='row'>
            {/* Grid column */}
            <div className='col-md-6 mt-md-0 mt-3'>
              {/* Content */}
              <h5 className='text-uppercase font-weight-bold'>Footer text 1</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita sapiente sint, nulla, nihil repudiandae commodi
                voluptatibus corrupti animi sequi aliquid magnam debitis, maxime
                quam recusandae harum esse fugiat. Itaque, culpa?
              </p>
            </div>
            {/* Grid column */}
            <hr className='clearfix w-100 d-md-none pb-3' />
            {/* Grid column */}
            <div className='col-md-6 mb-md-0 mb-3'>
              {/* Content */}
              <h5 className='text-uppercase font-weight-bold'>Footer text 2</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                deserunt fuga perferendis modi earum commodi aperiam temporibus
                quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
                aspernatur id excepturi hic.
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Text */}
        {/* Copyright */}
        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <Link to='/'> Reach</Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </Fragment>
  );
};

export default Footer;
