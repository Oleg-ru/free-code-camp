const lunches = [];
const addLunchToEnd = (lunches, item) => {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
};

const addLunchToStart = (lunches, item) => {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
};

const removeLastLunch = (lunches) => {
  if (lunches.length == 0) {
    console.log('No lunches to remove.');
  } else {
    console.log(`${lunches.pop()} removed from the end of the lunch menu.`);
    return lunches;
  }
};

const removeFirstLunch = (lunches) => {
  if (lunches.length == 0) {
    console.log('No lunches to remove.');
  } else {
    console.log(`${lunches.shift()} removed from the start of the lunch menu.`);
    return lunches;
  }
};

const getRandomLunch = (lunches) => {
  if (lunches.length == 0) {
    console.log('No lunches available.');
    return;
  }
  const element = lunches[Math.floor(Math.random() * lunches.length)];
  if (element) {
    console.log(`Randomly selected lunch: ${element}`);
  }
};


const showLunchMenu = (lunches) => {
  if (lunches.length == 0) {
    console.log('The menu is empty.');
  } else if (lunches.length > 0) {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
};

showLunchMenu(['Sushi', 'Pizza', 'Burger']);
