import React, { useEffect, useState } from 'react'

const Data = () => {
  const [Data, SetData] = useState([]);

  useEffect(() => {
    async function GetData() {
      const Response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const Data = await Response.json();

      if (Data && Data.length) SetData(Data);
    }

    GetData();
  }, []);

  return (
    <div>
      <ul>
        {Data.map((Todo) => (
          <section  key={Todo.id}><li>Title - {Todo.title}</li>
          <li>Body - {Todo.body}</li></section>
        ))}
      </ul>
    </div>
  );
};

export default Data;