import React, { useState } from 'react';

function CreateOwner() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    owner_id: '',
  });

  const handleChange = (e) => {
    let attr = e.target.name;
    setData({ ...data, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/owners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        owner_id: data.owner_id,
      }),
    }).then(() => {
      setData({
        first_name: '',
        last_name: '',
        owner_id: '',
      });
    });
  }



  return (
    <div className='create'>
      <form id='owner-form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Add New Owner</h1>
          <span>
            first_name: &nbsp;
            <input
              required
              value={data.first_name}
              type='text'
              className='form-control'
              id='first_name'
              name='first_name'
              placeholder='first_name'
              onChange={handleChange}
            />
          </span>
          &nbsp; &nbsp;
          <span>
            last_name: &nbsp;
            <input
              required
              value={data.last_name}
              type='text'
              className='form-control'
              id='last_name'
              name='last_name'
              placeholder='last_name'
              onChange={handleChange}
            />
          </span>
          <br />
          
          
          
          &nbsp;
          <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOwner;