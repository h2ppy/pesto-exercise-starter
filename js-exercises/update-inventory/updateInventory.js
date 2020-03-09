const COUNT_INDEX = 0;
const ITEM_NAME_INDEX = 1;
function checkForItem(currentItem) {
  return currentItem[1] === this[ITEM_NAME_INDEX];
}
function compareNameOfItem(item1, item2) {
  return item1[1].localeCompare(item2[ITEM_NAME_INDEX]);
}
function updateInventory(currentInventory, newInventory) {
  newInventory.forEach((newItem) => {
    const currentInventoryItem = currentInventory.find(checkForItem, newItem);
    if (currentInventoryItem !== undefined) {
      const indexOfItemInCurrentInventory = currentInventory.indexOf(currentInventoryItem);
      const updatedItemCount = newItem[0] + currentInventoryItem[COUNT_INDEX];
      currentInventory[indexOfItemInCurrentInventory][COUNT_INDEX] = updatedItemCount;
    } else {
      currentInventory.push(newItem);
    }
  });
  currentInventory.sort(compareNameOfItem);
  return currentInventory;
}

export {
  updateInventory,
};
