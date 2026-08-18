import React, { useState } from 'react'

const Seventh = () => {
const [Profile,SetProfile]=useState(
    {
        Name : "",
        Age : ""
    }
)

           const HandleChange=E=>
           {
           const {name, value}=E.target

           SetProfile((PrevProfile)=>(
            {
                ...PrevProfile, [name]:value
            }
           ))
           }

  return (
    <div>
        <h2>User profile</h2>

        <div>
            <label>
                Name : 
                <input type="text" name="Name" value={Profile.Name} onChange={HandleChange}></input>
            </label>
        </div>

        <div>
<label>
    Age : 
    <input type="number" name="Age" value={Profile.Age} onChange={HandleChange}></input>
</label>
        </div>

        <div>
            <h2>Profile info</h2> 

            <p>Name : {Profile.Name}</p>
            <p>Age : {Profile.Age}</p>
        </div>
    </div>
  )
}

export default Seventh