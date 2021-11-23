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
    return (
      <div className='container'>
        <div className='Content'>
          
          <ul id={owner.id}>
            <li>
              Name: {owner.last_name}, {owner.first_name}
            </li>
         
          </ul>
          <br />
        </div>
      </div>
    );
  });

  return <div className='ownersList'><h1>Owners</h1>{ownerList}</div>;
}

export default Owners;
