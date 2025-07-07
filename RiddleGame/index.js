import readlineSync from "readline-sync";
import { getLeaderboard } from "./services/Player.services.js";
import {
  getAllRiddles,
  createRiddle,
  updateRiddle,
  deleteRiddle,
} from "./services/Riddle.services.js";
import startGame from "./services/Game.services.js";

async function main() {
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
  const operation = readlineSync.question("Enter operation 1-6: ");
  switch (operation) {
    case "1":
      console.log("Starting the game...");
      const name = readlineSync.question("enter your name: ");
      await startGame(name);
      break;
    case "2":
      const riddleId = readlineSync.question("Enter riddle ID: ");
      const riddleName = readlineSync.question("Enter riddle name: ");
      const riddleTask = readlineSync.question("Enter riddle description: ");
      const riddleAnswer = readlineSync.question("Enter correct answer: ");

      const newRiddle = {
        id: parseInt(riddleId),
        name: riddleName,
        taskDescription: riddleTask,
        correctAnswer: riddleAnswer,
      };

      await createRiddle(newRiddle);
      break;
    case "3":
      const riddles = await getAllRiddles();
      riddles.forEach((riddle) => {
        console.log(`ID: ${riddle.id}, Name: ${riddle.name}`);
        console.log(`Description: ${riddle.taskDescription}`);
        console.log(`Answer: ${riddle.correctAnswer}\n`);
      });
      break;
    case "4":
      const updateId = readlineSync.question("Enter riddle ID to update: ");
      const updatedRiddleName = readlineSync.question(
        "Enter new name: "
      );
      const updatedTask = readlineSync.question(
        "Enter new description: "
      );
      const updatedAnswer = readlineSync.question("Enter new answer: ");

      const updatedRiddle = {
        id: parseInt(updateId),
        name: updatedRiddleName,
        taskDescription: updatedTask,
        correctAnswer: updatedAnswer,
      };

      await updateRiddle(updateId, updatedRiddle);
      break;
    case "5":
      const deleteId = readlineSync.question("Enter riddle ID to delete: ");
      await deleteRiddle(deleteId);
      break;
    case "6":
      await getLeaderboard();
      break;
    default:
      console.log("Invalid operation.");
  }
}

main().catch(console.error);
