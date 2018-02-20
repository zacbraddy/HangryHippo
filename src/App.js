import React, { Component } from 'react';
import './App.css';
import IngredientListItem from './ingredientListItem/components/IngredientListItem';

const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    likes: 1
  };

const ingredient = {
  removeItem: index => console.log(`removeItem fired for index ${index}`),
  index: 0,
};

class App extends Component {
  static defaultProps = ingredient;

  render() {
    return (
      <IngredientListItem {...this.props}>
        Sugar
      </IngredientListItem>
    );
  }
}

export default App;
