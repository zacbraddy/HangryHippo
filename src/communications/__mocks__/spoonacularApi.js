export const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
  };

// You should supply an exported value here of what your getRecipesById mock will return. It's being exported so we can use it for comparison in our tests

export const getRecipesMock = jest.fn().mockImplementation(() => new Promise((resolve, reject) => resolve([recipeSpec])));
// You'll need to create a mock of the getRecipesById method here you can make it resolve to the faked recipe instructions you've defined above

const mock = jest.fn().mockImplementation(() => {
  return {
    getRecipes: getRecipesMock, 
    // Don't forget to add your mocked method to the mock that we return out of this file
  }
});

export default mock();
