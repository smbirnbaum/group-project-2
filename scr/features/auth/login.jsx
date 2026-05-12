//login user 

import React from "react";
import { useState } from "react";
import { loginPlayer } from "./auth";   



setUsername("");
setPassword("");

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => { e.preventDefault();}

    const isValidPlayer = loginPlayer(username, password);
    if (isValidPlayer) {
        alert("Logged in! Start playing!");
    }
    else {
        alert("Invalid username or password!");
    };
    
return (
    <div>
        <h2>Login to start playing:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Player Name" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button type="submit">Login</button>
        </form>
    </div>
);

export default Login;