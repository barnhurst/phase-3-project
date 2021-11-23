import React, { useState } from 'react';

function DeleteCarByID() {
  const [carId, setCarId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setCarId(e.currentTarget.car.value);
  
    fetch(`http://localhost:9292/cars/${carId}`, {
      method: 'DELETE',
    });
    setCarId('');
   
  }

  const handleChange = (e) => {
    setCarId(e.target.value);
  };

  return (
    <div className='byDB'>
      <h1>Remove by Id</h1>
      <form id='delete-by-id' autoComplete='off' onSubmit={handleSubmit}>
        <input
          required
          type='integer'
          min='1'
          max='999'
          maxLength='3'
          id='car'
          name='car'
          placeholder='Enter ID'
          onChange={handleChange}
          value={carId}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DeleteCarByID;
