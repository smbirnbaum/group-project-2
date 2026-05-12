// local storage

export function registerPlayer(username, password) {
  const player = {
    username: username.trim(),
    password: password.trim(),
  };

  localStorage.setItem("player", JSON.stringify(player));

  console.log("Registered player:", player);
}

export function loginPlayer(username, password) {
  const storedPlayer = JSON.parse(localStorage.getItem("player"));

  console.log("Stored player:", storedPlayer);
  console.log("Trying login with:", username, password);

  if (!storedPlayer) {
    return false;
  }

  const isValidPlayer =
    storedPlayer.username === username.trim() &&
    storedPlayer.password === password.trim();

  return isValidPlayer;
}