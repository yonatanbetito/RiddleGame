import readlineSync from "readline-sync";
import r1 from "./riddles/r1.js";
import r2 from "./riddles/r2.js";
import r3 from "./riddles/r3.js";
import { Player } from "./services/Player.services.js";
import { Riddle } from "./services/Riddle.services.js";
import db from "./data-access/read.js";
import create from "./data-access/create.js";
import updateById from "./data-access/update.js";
import deleteById from "./data-access/delete.js";

//ייבוא של החידות
const riddles = [r1, r2, r3];

console.log("menu");
console.log(
  `What do you want to do?
1. Play the game
2. Create a new riddle
3. Read all riddles
4. Update an existing riddle
5. Delete a riddle
6. View leaderboard
`
);
const operation = readlineSync.question("Enter operation 1-4: ");
switch (operation) {
  case "1":
    console.log("Starting the game...");
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
    break;
  case "2":
    create();
    break;
  case "3":
    db();
    break;
  case "4":
    updateById();
    break;
  case "5":
    deleteById();
    break;
  case "6":
    console.log("Viewing leaderboard...");
    break;
  default:
    console.log("Invalid operation. Please try again.");
}
