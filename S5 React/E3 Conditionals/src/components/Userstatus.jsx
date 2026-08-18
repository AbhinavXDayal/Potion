import React from 'react'

const Userstatus = (Props) => {
    if(Props.LoggedIn && Props.IsAdmin)
        {
            return (
                <>
            <h1>Welcome admin</h1>

            <hr />
            </>
            )
        }
    else 
    {
        return(
            <>
        <h1>Welcome user</h1>

        <hr />
        </>
        )
    }
}

export default Userstatus