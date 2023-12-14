import React from 'react';
import './body.css';

//importing the insertion components===>

import Top from './TopSection/Top';
import Bottom from './BottomSection/Bottom';






const Body = () => {
  return (
    <div className='body'>
      <Top/>
      <Bottom/>
    </div>
  )
}

export default Body;
