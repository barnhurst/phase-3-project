import React, { useState, useEffect } from 'react';

function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/cars')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  

  const carList = cars.map((car) => {
    return (
      <div className='individual-car-card'>
        <ul id={car.id}>
          <li>Make: {car.make} </li>
          <li>Model: {car.model}</li>
          <li>Color: {car.color}</li>
          <li>Year: {car.year}</li>
          <li>Owner: {car.owner.last_name}, {car.owner.first_name}</li>
        </ul>
      </div>
    );
  });

  return <div className='carList'>{carList}</div>;
}

export default Cars;
