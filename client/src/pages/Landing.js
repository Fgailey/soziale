import React from 'react';

export const Landing = () => {
  return (
    <div>
      <div className='landing'>
        <div className='container pt-5 pb-5 text-center'>
          <h1>Hello</h1> <br />
          <h1>Welcome to Reach</h1> <br />
          <h1>I love you</h1> <br />
          <iframe
            title="Intro Vid"
            width={560}
            height={315}
            src='https://youtube.com/embed/ZIFCWpn4qQ4'
            frameBorder={0}
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
