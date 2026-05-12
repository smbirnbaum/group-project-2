//local storage

export function registerPlayer(username, password) {
    const player = {
        username: username,
        password: password,
    };

    localStorage.setItem("player", JSON.stringify(player)); //is this correct?
}

if (storedPlayer) {
    return false;
}

const isValidPlayer =
    storedPlayer.username === username && storedPlayer.password === password;
return isValidPlayer;

