import React from 'react';
import { Data1, Data2 } from "../App";

const Third = ({ DataDrill }) => {
  return (
    <>
      <Data1.Consumer>
        {(ContextApi) => (
          <>
            <h1>{ContextApi}</h1>
            <Data2.Consumer>
              {(Age) => <h1>{Age}</h1>}
            </Data2.Consumer>
          </>
        )}
      </Data1.Consumer>

      <div>
        <h1>{DataDrill}</h1>
      </div>
    </>
  );
};

export default Third;
