import React from 'react'

const Weather = () => {
  let Temp = 20;

  if (Temp < 15) {
    return (
      <>
        <h1>It's cold outside</h1>

        <hr />
      </>
    );
  } else if (Temp >= 15 && Temp <= 25) {
    return (
      <>
        <h1>It's nice outside</h1>

        <hr />
      </>
    );
  } else if (Temp > 25) {
    return (
      <>
        <h1>It's hot outside</h1>
        
        <hr />
      </>
    );
  }
}

export default Weather;