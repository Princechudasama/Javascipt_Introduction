// Some advanced topic on arrays

// ===========Shallow copy================ copy that change in original
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

// const ingredientsListCopy = Array.from(ingredientsList);
// console.log(ingredientsListCopy);

// ingredientsListCopy[1].list = ["rice"," flour", "water"];
// console.log(ingredientsList); // that changed original arrray

//===========Deep copy =================copy that doesn change in original
// const ingredientsList1 = ["noodles", { list: ["eggs", "flour", "water"] }];

// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList1));

// ingredientsListDeepCopy[1].list = ["rice","flour", "water"];
// console.log(ingredientsListDeepCopy)

// console.log(ingredientsList1); //that doesnt change 

