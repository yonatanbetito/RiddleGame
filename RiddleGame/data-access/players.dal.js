import fs from "fs/promises";

//read all players
async function getAllPlayers() {
  try {
    const data = await fs.readFile("./DB/db.players.txt", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Error reading file", err.message);
    return [];
  }
}

//create new player
async function createPlayer(player) {
  try {
    const players = await getAllPlayers();
    players.push(player);
    await fs.writeFile("./DB/db.players.txt", JSON.stringify(players, null, 2));
    console.log("Player saved.");
  } catch (err) {
    console.log("Error saving player", err.message);
  }
}

//update player by id
async function updatePlayerById(id, updatedPlayer) {
  try {
    const players = await getAllPlayers();
    let index = -1;
    for (let i = 0; i < players.length; i++) {
      if (players[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("Player not found.");
      return;
    }

    players[index] = updatedPlayer;
    await fs.writeFile("./DB/db.players.txt", JSON.stringify(players, null, 2));
    console.log("Player updated.");
  } catch (err) {
    console.log("Error updating player", err.message);
  }
}

//delete by id
async function deletePlayerById(id) {
  try {
    const players = await getAllPlayers();
    let index = -1;
    for (let i = 0; i < players.length; i++) {
      if (players[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("not found");
      return;
    }

    players.splice(index, 1);
    await fs.writeFile("./DB/db.players.txt", JSON.stringify(players, null, 2));
    console.log("player deleted.");
  } catch (err) {
    console.log("error:", err.message);
  }
}

export { getAllPlayers, createPlayer, updatePlayerById, deletePlayerById };
