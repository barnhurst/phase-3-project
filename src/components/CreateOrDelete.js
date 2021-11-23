import React from 'react';
import { Link } from 'react-router-dom';

function CreateOrDelete() {
  return (
    <div className='create-or-delete'>
      <h1>Update car listings.</h1>
      <span>
        <Link className='button' to='/createCar'>
          Add Car
        </Link>
        &nbsp; &nbsp;
        <Link className='button' to='/removeCar'>
          Remove Car
        </Link>
      &nbsp; &nbsp;
        <Link className='button' to='/createOwner'>
          Add Owner
        </Link>
      </span>
    </div>
  );
}

export default CreateOrDelete;
