//delete by id
import fs from "fs";
import readlineSync from "readline-sync";
async function deleteById() {
    try {
        const typedb = readlineSync.question("Enter type db (players/riddles): ");
        const dbExists = fs.readFileSync(`./DB/db.${typedb}.txt`, "utf-8");
        const jsonDb = JSON.parse(dbExists);
        
        const id = readlineSync.question("Enter the ID of the riddle to delete: ");
        const riddleIndex = jsonDb.findIndex(r => r.id === parseInt(id));
        
        if (riddleIndex === -1) {
            console.log("Riddle not found.");
            return;
        }
        
        jsonDb.splice(riddleIndex, 1);
        
        fs.writeFileSync(`./DB/db.${typedb}.txt`, JSON.stringify(jsonDb, null, 2));
        console.log("Riddle deleted successfully.");
    } catch (err) {
        console.log("Error deleting file:", err.message);
    }
}   
export default deleteById;