import { Riddle } from "../modeles/Riddle.js";
import { Player } from "../modeles/Player.js";
import { savePlayerResult } from "./Player.services.js";
import { getAllRiddles } from "./Riddle.services.js";

async function startGame(playerName) {
  try {
    const player = new Player(playerName);
    const riddles = await getAllRiddles();

    for (let i = 0; i < riddles.length; i++) {
      const riddle = new Riddle(riddles[i]);
      console.log(`\nRiddle ${i + 1}:`);
      console.log(riddle.taskDescription);
      const startTime = Date.now();
      riddle.ask();
      const endTime = Date.now();
      player.recordTime(startTime, endTime);
    }

    const stats = player.showStats();
    console.log(`Great job ${player.name}, you finished the game!`);
    console.log(`Total time: ${stats.total}`);
    console.log(`Average: ${stats.average}`);

    await savePlayerResult(playerName, stats);

    return player;
  } catch (err) {
    console.log("error:", err.message);
  }
}

export default startGame;
