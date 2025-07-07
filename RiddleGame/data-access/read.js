import readlineSync from "readline-sync";
import fs from "fs/promises";

async function readDb() {
  try {
    const typedb = readlineSync.question("enter type db (player/riddle): ");
    const data = await fs.readFile(`./DB/db.${typedb}.txt`, "utf-8");
    const users = JSON.parse(data);
    console.log(users);
  } catch (err) {
    console.log("Error reading file:", err.message);
  }
}

export default readDb;