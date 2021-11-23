import React, { useState, useEffect } from 'react';
<div>
  <h1>Owners</h1>
</div>
function Owners() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/owners')
      .then((response) => response.json())
      .then((data) => setOwners(data));
  }, []);

 

  const ownerList = owners.map((owner) => {
    const cars = owner.cars.map((car) => {
      return (
        <li>
          Make: {car.make}
          Model: {car.model}
          Car ID: {car.id}
        </li>
      )
    })
    return (
            <li id={owner.id}>
              <h3>Name: {owner.last_name}, {owner.first_name}</h3>
              <ul>
                {cars}
                </ul>
            </li>
    );
  });

  return (
  
  <div className='ownersList'>
  <h1>Owners</h1>
    <div className='Content'>
    <div className='container'>
     <ul>{ownerList}</ul>
     </div>
    </div>
  </div>)
}

export default Owners;
