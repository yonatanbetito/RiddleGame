import readlineSync from "readline-sync";
export class Riddle {
  constructor({ id, name, taskDescription, correctAnswer }) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
  }
  ask() {
    do {
      const response = readlineSync.question("enter your response: ");
      if (response == this.correctAnswer) {
        return true;
      }
    } while (true);
  }
}
