import {
  getAllRiddles as getRiddlesFromDB,
  createRiddle as createRiddleInDB,
  updateRiddleById,
  deleteRiddleById,
} from "../data-access/riddles.dal.js";

// get by id
async function getRiddleById(id) {
  const riddles = await getRiddlesFromDB();
  for (let i = 0; i < riddles.length; i++) {
    if (riddles[i].id === parseInt(id)) {
      return riddles[i];
    }
  }
  return null;
}

// get all
async function getAllRiddles() {
  return await getRiddlesFromDB();
}

// create
async function createRiddle(riddleData) {
  return await createRiddleInDB(riddleData);
}

// update
async function updateRiddle(id, updatedData) {
  return await updateRiddleById(id, updatedData);
}

// delete
async function deleteRiddle(id) {
  return await deleteRiddleById(id);
}

export {
  getRiddleById,
  getAllRiddles,
  createRiddle,
  updateRiddle,
  deleteRiddle,
};
