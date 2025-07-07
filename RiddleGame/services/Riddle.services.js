import readlineSync from "readline-sync";
export class Riddle {
  constructor({ id, name, taskDescription, correctAnswer }) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
  }
  //מקבל תשובה ובודק אם תואם לדאטה ומחזיר
  ask() {
    let response;

    while (response !== this.correctAnswer) {
      response = readlineSync.question("Enter your response: ");
      if (response === this.correctAnswer) {
        console.log("Correct!");
        console.log("");
        return true;
      } else {
        console.log("Try again.");
        console.log("");
      }
    }
  }
}
