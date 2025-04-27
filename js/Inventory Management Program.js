const inventory = [];

/**
 *
 * @param {string} productName
 * @returns {number} Содержит ли список указанный продукт. Если да - возвращает его индекс в массиве. Иначе -1;
 */
function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

/**
 *
 * @param {object} productObject
 */
function addProduct(productObject) {
  for (let i = 0; i < inventory.length; i++) {
    if (Object.values(inventory[i]).includes(productObject.name.toLowerCase())) {
      inventory[i].quantity += productObject.quantity;
      console.log(`${inventory[i].name} quantity updated`);
      return;
    }
  }
  inventory.push({
    name: productObject.name.toLowerCase(),
    quantity: productObject.quantity,
  });
  console.log(`${productObject.name.toLowerCase()} added to inventory`);
}

function removeProduct(productName, productQuantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (Object.values(inventory[i]).includes(productName.toLowerCase())) {
      const updateQuantity = inventory[i].quantity - productQuantity;
      if (updateQuantity < 0) {
        console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`);
      } else if(updateQuantity === 0) {
        inventory.splice(i, 1);
      } else if(updateQuantity > 0) {
        inventory[i].quantity = updateQuantity;
        console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[i].quantity}`);
      }
      return;
    } 
  }
  console.log(`${productName.toLowerCase()} not found`);
}

inventory.push(
  { name: 'milk', quantity: 1 },
  { name: 'bread', quantity: 2 },
  { name: 'egs', quantity: 10 }
);


//console.log(findProductIndex('meat'));
addProduct({ name: 'milk', quantity: 5 });
// removeProduct('egs', 1);
console.log(inventory);