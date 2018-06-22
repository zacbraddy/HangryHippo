import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../../header/components/Header';
import IngredientsList from '../../ingredientsList/components/IngredientsList';
import RecipeItemList from '../../recipeItemList/components/RecipeItemList';
import Recipe from '../../recipe/components/Recipe';

import SpoonacularApi from '../../communications/spoonacularApi';

class App extends Component {
  state = {
    ingredients: [],
    nextIngredient: '',
    canSearch: false,
    isShowingRecipe: false,
    instructions: '',
  };

  addIngredient = () => {
    if(this.state.nextIngredient.length === 0) return;

    this.setState({
      ingredients: this.state.ingredients.concat(this.state.nextIngredient),
      nextIngredient: '',
      canSearch: true,
    });
  };

  removeIngredient = indexToRemove => {
    const newIngredients = this.state.ingredients.concat([]);
    newIngredients.splice(indexToRemove, 1);
    const newCanSearch = newIngredients.length !== 0;

    this.setState({
      ingredients: newIngredients,
      canSearch: newCanSearch,
    });
  };

  handleAddNextChange = newAddNextIngredient => {
    this.setState({
      nextIngredient: newAddNextIngredient,
    });
  };

  doSearch = async () => {
    this.setState({
      canSearch: false,
    });

    await SpoonacularApi
      .getRecipes(this.state.ingredients)
      .then(newRecipes => {
        this.setState({
          recipes: newRecipes,
          canSearch: true,
        });
      });
  };

  showRecipe = async id => {
    this.setState({
      canSearch: false,
      isShowingRecipe: true,
    });

    // You will have to add your call to the getRecipesById method of the SpoonacularApi module that you have
    // created and then populate the instructions property of state when the promise resolves.
      .then(instructions => {
        this.setState({
          instructions,
        });
      });
  };

  hideRecipe = () => {
    this.setState({
      canSearch: this.state.ingredients.length !== 0,
      isShowingRecipe: false,
      instructions: '',
    });
  };
      

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
                  ingredients={this.state.ingredients}
                  nextIngredient={this.state.nextIngredient}
                  addIngredient={this.addIngredient}
                  removeIngredient={this.removeIngredient}
                  handleAddNextChange={this.handleAddNextChange}
                  canSearch={this.state.canSearch}
                  doSearch={this.doSearch}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 recipes-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                {
                  this.state.isShowingRecipe
                    ? <Recipe instructions={this.state.instructions} hideRecipe={this.hideRecipe} />
                    : <RecipeItemList items={this.state.recipes} showRecipe={this.showRecipe} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
