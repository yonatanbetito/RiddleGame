import readlineSync from "readline-sync";
import { Player } from "./classes/Player.js";
import { Riddle } from "./classes/Riddle.js";
import r1 from "./riddles/r1.js";
import r2 from "./riddles/r2.js";
import r3 from "./riddles/r3.js";

//ייבוא של החידות
const riddles = [r1, r2, r3];

const name = readlineSync.question("enter your name: ");
const player = new Player(name);
//ללואה שמריצה את החידות
for (let i = 0; i < riddles.length; i++) {
  const riddle = new Riddle(riddles[i]);
  console.log(`\nRiddle ${i + 1}:`);
  console.log(riddle.taskDescription);
  const startTime = Date.now();
  riddle.ask();
  const endTime = Date.now();
  player.recordTime(startTime, endTime);
}
//הצגת הנתונים והדפסה
const stats = player.showStats();
console.log(`Great job ${player.name}, you finished the game!`);
console.log(`Total time: ${stats.total}`);
console.log(`Average per riddle: ${stats.average}`);
