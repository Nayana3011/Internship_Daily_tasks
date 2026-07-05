function generateId(existingItems) {
  return existingItems.length
    ? Math.max(...existingItems.map((item) => item.id)) + 1
    : 1;
}

function currentTimestamp() {
  return new Date().toISOString();
}

module.exports = {
  generateId,
  currentTimestamp,
};
