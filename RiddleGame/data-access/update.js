import fs from "fs/promises";
import readlineSync from "readline-sync";   

async function updateById(){
    try {
        const typedb = readlineSync.question("Enter type db (players/riddles): ");
        const dbExists = await fs.readFileSync(`./DB/db.${typedb}.txt`, "utf-8");
        const jsonDb = JSON.parse(dbExists);
        
        const id = readlineSync.question(`Enter the ID of the ${typedb} to update: `);
        const Index = jsonDb.findIndex(r => r.id === parseInt(id));
        
        if (Index === -1) {
        console.log("Id not found.");
        return;
        }
        
        const updated = readlineSync.question("Enter updated in format of object: ");
        jsonDb[Index] = JSON.parse(updated);
        
        await fs.writeFileSync(`./DB/db.${typedb}.txt`, JSON.stringify(jsonDb, null, 2));
        console.log("Updated successfully.");
    } catch (err) {
        console.log("Error updating file:", err.message);
    }
}
export default updateById;
