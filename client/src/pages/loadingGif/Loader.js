import React, { Fragment } from 'react';
import loadingGiphy from './images/loadingGiphy.gif';

export default () => (
  <Fragment>
    <img
      src={loadingGiphy}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
