import { polyfill } from 'es6-promise';
polyfill();
import fetch from 'isomorphic-fetch';

export default (ingredients) => {
  const uriIngredients = encodeURIComponent(ingredients);
  return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${uriIngredients}&limitLicense=false&number=5&ranking=1`,
    {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'rzk8LeXX9wmshBeNRIN4AQo9EY1Ip11YYGxjsnzGQIwVHsU7EU',
        Accept: 'application/json',
      }
    }
  ).then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  });
}
