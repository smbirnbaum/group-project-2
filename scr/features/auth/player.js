// savePlayer ()
// getPlayer ()



export function savePlayer(name) {
  localStorage.setItem("player", name);
}



export function getPlayer() {
  return localStorage.getItem("player");
}


