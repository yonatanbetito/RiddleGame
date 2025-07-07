import fs from "fs";
import readlineSync from "readline-sync";

async function create() {
  try {
    const typedb = readlineSync.question("enter type db (player/riddle): ");
    const dbExists = fs.readFileSync(`./DB/db.${typedb}.txt`, "utf-8");
    const jsonDb = JSON.parse(dbExists);
    const data = readlineSync.question("enter riddle-object to save: ");
    fs.writeFileSync(
      `./DB/db.${typedb}.txt`,
      JSON.stringify([...jsonDb, JSON.parse(data)], null, 2)
    );
    console.log("Data saved successfully.");
  } catch (err) {
    console.log("Error writing file:", err.message);
  }
}
export default create;
