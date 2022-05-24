const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// while loops printing out the contents of ingredients:

let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

// for loop that prints out the contents of ingredients

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// while loop that prints out the contents backwards

let x = ingredients.length - 1; 
while (x >= 0) {
  console.log(ingredients[x]);
  x--;
}

// for loop that prints out the contents backwards

for (let y = ingredients.length - 1; y >=0; y--) {
  console.log(ingredients[y]);
}

