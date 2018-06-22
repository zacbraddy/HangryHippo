import axios from "axios";

class SpoonacularApi {
  apiKey = 'rzk8LeXX9wmshBeNRIN4AQo9EY1Ip11YYGxjsnzGQIwVHsU7EU';

  getRecipes = (ingredients) => {
    return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
      {
        params: {
          fillIngredients: false,
          ingredients: ingredients.join(','),
          limitLicense: false,
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
    return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`,
      {
        params: {
          includeNutrition: false,
        },
        headers: {
          'X-Mashape-Key': this.apiKey,
          Accept: 'application/json',
        },
        transformResponse: [data => JSON.parse(data).instructions],
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw new Error("Bad response from server");
    });
  };
};

export default new SpoonacularApi();
