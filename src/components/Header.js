import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navigation'>
      <Link className='navLinks' id='homeLink' to='/home'>
        Home
      </Link>
      {/* <Link className='navLinks' id='carsLink' to='/cars'>
        Cars
      </Link> */}
      <Link className='navLinks' id='ownersLink' to='/owners'>
        Owners
      </Link>
      <Link className='navLinks' id='updateLiisting' to='/updateList'>
        Update
      </Link>
    </div>
  );
}

export default Header;
