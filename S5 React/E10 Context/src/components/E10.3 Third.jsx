import React from 'react';
import { useContext } from 'react';
import { Data1, Data2 } from "../App";

const Third = () => {
const UserName= useContext(Data1)
const Age= useContext(Data2)

  return (
   <h1>This is {UserName} and My age is : {Age}</h1>
  );
};

export default Third;