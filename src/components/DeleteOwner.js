import React, { useState } from 'react';

function DeleteOwnerByID() {
  const [ownerId, setOwnerId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setOwnerId(e.currentTarget.value);
  
    fetch(`http://localhost:9292/owners/${ownerId}`, {
      method: 'DELETE',
    });
    setOwnerId('');
   
  }

  const handleChange = (e) => {
    setOwnerId(e.target.value);
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
          value={ownerId}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DeleteOwnerByID;
