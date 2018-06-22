export const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
  };

const recipeInstructions = `I'm Batman`;

export const getRecipesMock = jest.fn().mockImplementation(() => new Promise((resolve, reject) => resolve([recipeSpec])));
export const getRecipeByIdMock = jest.fn().mockImplementation(() => new Promise((resolve, reject) => resolve(recipeInstructions.instructions)));

const mock = jest.fn().mockImplementation(() => {
  return {
    getRecipes: getRecipesMock, 
    getRecipeById: getRecipeByIdMock,
  }
});

export default mock();
