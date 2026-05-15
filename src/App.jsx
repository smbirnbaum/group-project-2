import { useState } from "react";
import Login from "./features/auth/login";
import Register from "./features/auth/Register";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

<<<<<<< Updated upstream
  return (
    <main>
      <h1>Trivia Quiz Game</h1>

      {isLoggedIn ? (
        <Quiz />
      ) : (
=======
  if (!isLoggedIn) {
    return (
      <main>
        <h1>Trivia Quiz Game</h1>

>>>>>>> Stashed changes
        <div>
          <Register />
          <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
<<<<<<< Updated upstream
      )}
=======
      </main>
    );
  }

  return (
    <main>
      <h1>Trivia Quiz Game</h1>
      <Quiz />
>>>>>>> Stashed changes
    </main>
  );
}

export default App;