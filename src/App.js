import React, { Component } from 'react';
import './App.css';
import Header from './header/components/Header';
import IngredientsList from './ingredientsList/components/IngredientsList';
import RecipeItemList from './recipeItemList/components/RecipeItemList';

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

export const recipeInstructions = {
  "instructions": "<ol><li>Preheat Oven 350 degrees:</li><li>Combine sliced apples, lemon zest, dash of ground cloves and sugar in a bowl and toss. Place in a deep dish buttered baking dish.</li><li>In a smaller bowl combine the flour, sugar, brown sugar and butter. Mix this together with your fingers until it becomes crumbly. Place this mixture on top of the apples.</li><li>Bake about 40-45 minutes, until the topping gets a little golden color.</li></ol>",
};

class App extends Component {
  static defaultProps = ingredientsList;

  render() {
    return (
      <div className="App container-fluid">
        <div className="row container-fluid">
          <div className="panel panel-default header hangry-panel">
            <div className="panel-body">
              <Header />
            </div>
          </div>
        </div>
        <div className="row content-row">
          <div className="col-lg-4 ingredients-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                <IngredientsList 
                  ingredients={this.props.ingredients}
                  nextIngredient={this.props.nextIngredient}
                  addIngredient={this.props.addIngredient}
                  removeIngredient={this.props.removeIngredient}
                  handleAddNextChange={this.props.handleAddNextChange}
                  canSearch={this.props.canSearch}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 recipes-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                <RecipeItemList items={[recipeSpec, recipeSpec, recipeSpec]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
