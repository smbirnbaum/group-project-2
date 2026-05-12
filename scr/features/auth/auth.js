//local storage

export function registerPlayer(username, password) {
    const player = {
        username: username,
        password: password
    };

    localStorage.setItem("player", JSON.stringify(player)); //är detta rätt?
}



