import { useState } from "react";
import Login from "./features/auth/login";
import Register from "./features/auth/Register";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <h1>Trivia Quiz Game</h1>

      {isLoggedIn ? (
        <Quiz />
      ) : (
        <div>
          <Register />
          <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </main>
  );
}

export default App;