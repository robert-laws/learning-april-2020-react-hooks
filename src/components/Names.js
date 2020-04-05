import React, { useState, useEffect } from 'react';

const Names = () => {
  const [firstName, setFirstName] = useState('');

  const handleChange = event => {
    setFirstName(event.target.value);
  }

  useEffect(() => {
    if(firstName === 'Bob') {
      console.log('it is bob...');
    }
  }, [firstName])

  return (
    <section>
      <label htmlFor='firstName'>
        First Name:
      </label>
      <input type='text' name='firstName' id='firstName' value={firstName} onChange={handleChange} />
      <br/>
      <h4>
        {firstName}
      </h4>
    </section>
  )
}

export default Names;