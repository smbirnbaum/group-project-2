// registration form

import React from "react";
import { useState } from "react";
import { registerPlayer } from "./auth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    registerPlayer(username, password);

    alert("You have created a player! Login to start playing!");

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Register to start playing:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Player Name"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;