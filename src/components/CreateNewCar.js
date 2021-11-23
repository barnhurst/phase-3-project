import React, { useState } from 'react';

function CreateNewCar() {
  const [data, setData] = useState({
    make: '',
    model: '',
    // year: '',
    car_id: '',
    owner_id: '',
  });

  const handleChange = (e) => {
    let attr = e.target.name;
    setData({ ...data, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        make: data.make,
        model: data.model,
        // year: data.year,
        // car_id: data.car_id,
        owner_id: data.owner_id,
      }),
    }).then(() => {
      setData({
        make: '',
        model: '',
        // year: '',
        car_id: '',
        owner_id: '',
      });
    });
  }



  return (
    <div className='create'>
      <form id='car-form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Add New Car</h1>
          <span>
            Make: &nbsp;
            <input
              required
              value={data.make}
              type='text'
              className='form-control'
              id='make'
              name='make'
              placeholder='Make'
              onChange={handleChange}
            />
          </span>
          &nbsp; &nbsp;
          <span>
            Model: &nbsp;
            <input
              required
              value={data.model}
              type='text'
              className='form-control'
              id='model'
              name='model'
              placeholder='Model'
              onChange={handleChange}
            />
          </span>
          <br />
          {/* <span>
            Year: &nbsp;
            <input
              required
              value={data.year}
              type='number'
              className='form-control'
              id='year'
              name='year'
              placeholder='Year'
              onChange={handleChange}
            />
          </span> */}
          &nbsp; &nbsp;
          <span>
            Owner: &nbsp;
            <input
              required
              value={data.owner_id}
              type='number'
             
              className='form-control'
              id='owner_id'
              name='owner_id'
              placeholder='0'
              onChange={handleChange}
            />
          </span>
          <br />
   
          <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewCar;
