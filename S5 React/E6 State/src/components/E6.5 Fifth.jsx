import React, { useState, useEffect } from 'react';

const Fifth = () => {
  const [Name, SetName] = useState(() => {
    const SavedName = localStorage.getItem('Name');
    return SavedName ? JSON.parse(SavedName) : '';
  });

  useEffect(() => {
    localStorage.setItem('Name', JSON.stringify(Name));
  }, [Name]);

  const HandleChange = (event) => {
    SetName(event.target.value);
  };

  const HandleClear = () => {
    SetName("");
  };

  return (
    <div>
      <h1>Your name: {Name}</h1>
      <input
        type="text"
        value={Name}
        onChange={HandleChange}
        placeholder="Enter your name"
      />
      <button onClick={HandleClear}>Clear name</button>
    </div>
  );
};

export default Fifth;