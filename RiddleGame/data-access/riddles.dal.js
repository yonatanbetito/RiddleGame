import fs from "fs/promises";

//read all
async function getAllRiddles() {
  try {
    const data = await fs.readFile("./DB/db.riddles.txt", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log("error:",  err.message);
    return [];
  }
}

//create new
async function createRiddle(riddle) {
  try {
    const riddles = await getAllRiddles();
    riddles.push(riddle);
    await fs.writeFile("./DB/db.riddles.txt", JSON.stringify(riddles, null, 2));
    console.log("riddle saved.");
  } catch (err) {
    console.log("error:",err.message);
  }
}

//update by id
async function updateRiddleById(id, updatedRiddle) {
  try {
    const riddles = await getAllRiddles();
    let index = -1;
    for (let i = 0; i < riddles.length; i++) {
      if (riddles[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("not found");
      return;
    }

    riddles[index] = updatedRiddle;
    await fs.writeFile("./DB/db.riddles.txt", JSON.stringify(riddles, null, 2));
    console.log("riddle updated.");
  } catch (err) {
    console.log("error:", err.message);
  }
}

//delete by id
async function deleteRiddleById(id) {
  try {
    const riddles = await getAllRiddles();
    let index = -1;
    for (let i = 0; i < riddles.length; i++) {
      if (riddles[i].id === parseInt(id)) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("not found.");
      return;
    }

    riddles.splice(index, 1);
    await fs.writeFile("./DB/db.riddles.txt", JSON.stringify(riddles, null, 2));
    console.log("riddle deleted.");
  } catch (err) {
    console.log("error:", err.message);
  }
}

export { getAllRiddles, createRiddle, updateRiddleById, deleteRiddleById };
