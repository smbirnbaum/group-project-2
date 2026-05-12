// local storage

export function registerPlayer(username, password) {
  const player = {
    username: username,
    password: password,
  };

  localStorage.setItem("player", JSON.stringify(player));
}

export function loginPlayer(username, password) {
  const storedPlayer = JSON.parse(localStorage.getItem("player"));

  if (!storedPlayer) {
    return false;
  }

  const isValidPlayer =
    storedPlayer.username === username && storedPlayer.password === password;

  return isValidPlayer;
}