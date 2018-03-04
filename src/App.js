import React, { Component } from 'react';
import './App.css';
import Header from './header/components/Header';
import IngredientsList from './ingredientsList/components/IngredientsList';

const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    likes: 1
  };

const ingredientsList = {
  ingredients: ['Water', 'Flour'],
  nextIngredient: 'Sugar',
  addIngredient: () => console.log('addIngredient fired'),
  handleAddNextChange: () => console.log('handleAddNextChange fired'),
  removeIngredient: index => console.log(`removeIngredient fired for index ${index}`),
  canSearch: true,
};

class App extends Component {
  static defaultProps = ingredientsList;

  render() {
    return (
      <div className="App container-fluid">
        <div className="row container-fluid">
          <div className="panel panel-default header hangry-panel">
            <div className="panel-body">
              /* Header goes here */
            </div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col-lg-4 ingredients-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                <IngredientsList 
                  ingredients={ingredientsList.ingredients}
                  nextIngredient={ingredientsList.nextIngredient}
                  addIngredient={ingredientsList.addIngredient}
                  removeIngredient={ingredientsList.removeIngredient}
                  handleAddNextChange={ingredientsList.handleAddNextChange}
                  canSearch={ingredientsList.canSearch}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 recipes-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                /* Receipe Item List goes here */
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
