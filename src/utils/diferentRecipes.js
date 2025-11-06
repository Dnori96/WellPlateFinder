export function threeDifRecipes(id, totalRecipes) {
  const threeDiferentNums = [];
  for (let i = 1; i <= totalRecipes; i++) {
    if (i !== id) threeDiferentNums.push(i);
  }

  const needed = Math.min(3, threeDiferentNums.length);
  const recipesPicked = [];
  for (let n = 0; n < needed; n++) {
    const idx = Math.floor(Math.random() * threeDiferentNums.length);
    recipesPicked.push(threeDiferentNums[idx]);
    threeDiferentNums.splice(idx, 1);
  }
  return recipesPicked;
}
