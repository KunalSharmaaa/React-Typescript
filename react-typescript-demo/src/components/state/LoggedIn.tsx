import { useState } from "react"

export const LoggedIn = () => {
    const handleLogIn = () => { }
    const handleLogout = () => { }
    return (
        <div>
            <button onClick={ handleLogIn}>Login</button>
            <button onClick = {handleLogout}>Login</button>
        </div>
    )
}