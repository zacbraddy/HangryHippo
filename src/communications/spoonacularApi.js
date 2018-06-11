import axios from "axios";

class SpoonacularApi {
  // Don't forget that you'll need to replace the api key below with your own or your api calls won't work
  apiKey = 'rzk8LeXX9wmshBeNRIN4AQo9EY1Ip11YYGxjsnzGQIwVHsU7EU';

  getRecipes = (ingredients) => {
    return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
      {
        params: {
          fillIngredients: false,
          ingredients: ingredients.join(','),
          limitiLicense: false,
          number: 5,
          ranking: 1,
        },
        headers: {
          'X-Mashape-Key': this.apiKey,
          Accept: 'application/json',
        },
        transformResponse: [data => {
          return JSON.parse(data).map(({id, title, image, usedIngredientCount, missingIngredientCount}) => ({
            id,
            title,
            image,
            usedIngredientCount,
            missingIngredientCount,
          }));
        }],
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw new Error("Bad response from server");
    });
  };

  getRecipeById = (id) => {
    // You can find information about the endpoint that you need to interrogate here:
    // https://market.mashape.com/spoonacular/recipe-food-nutrition#get-recipe-information
    // You will need to take the "instructions" property off the response and have the promise return this
  };
};

export default new SpoonacularApi();
