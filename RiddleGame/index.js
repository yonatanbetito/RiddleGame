import readlineSync from "readline-sync";
import { Player } from "./classes/Player.js";
import { Riddle } from "./classes/Riddle.js";
import r1 from "./riddles/r1.js";

const name = readlineSync.question("enter your name: ");
const player = new Player(name);
const startTime = Date.now();
const riddle = new Riddle(r1);
console.log(riddle.taskDescription);

riddle.ask();
const endTime = Date.now();
player.recordTime(startTime, endTime);
const stats = player.showStats();
console.log(`Great job ${player.name}, you finished the game!`);
console.log(`Total time: ${stats.total}`);
console.log(`Average per riddle: ${stats.average}`);

// for (const riddleObj of riddlesData) {
//   const riddle = new Riddle(riddleObj);
//   riddle.ask();
