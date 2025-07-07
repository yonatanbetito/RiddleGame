import { Player } from "../modeles/Player.js";
import { getAllPlayers, createPlayer } from "../data-access/players.dal.js";


async function getLeaderboard() {
  try {
    const players = await getAllPlayers();
    console.log("Leaderboard:");
    for (let i = 0; i < players.length; i++) {
      console.log(`${i + 1}. ${players[i].name}`);
    }
    return players;
  } catch (err) {
    console.log("error:", err.message);
    return [];
  }
}

async function savePlayerResult(playerName, gameStats) {
  try {
    const players = await getAllPlayers();
    let newId = 1;
    if (players.length > 0) {
      newId = players[players.length - 1].id + 1;
    }

    const playerData = {
      id: newId,
      name: playerName,
      totalTime: gameStats.total,
      averageTime: gameStats.average,
    };

    await createPlayer(playerData);
  } catch (err) {
    console.log("error:", err.message);
  }
}

export { Player, getLeaderboard, savePlayerResult };
