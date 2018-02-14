import React, { Component } from 'react';
import './App.css';
import Header from './header/components/Header';
import RecipeItemList from './recipeItemList/components/RecipeItemList';
import IngredientsList from './IngredientsList/components/IngredientsList'; 

class App extends Component {
  static defaultProps = {
    items: [
      {
        id: 641803,
        title: "Easy & Delish! ~ Apple Crumble",
        image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        usedIngredientCount: 3,
        missedIngredientCount: 4,
        likes: 1
      },
      {
        id: 641803,
        title: "Easy & Delish! ~ Apple Crumble",
        image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        usedIngredientCount: 3,
        missedIngredientCount: 4,
        likes: 1
      },
      {
        id: 641803,
        title: "Easy & Delish! ~ Apple Crumble",
        image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        usedIngredientCount: 3,
        missedIngredientCount: 4,
        likes: 1
      },
    ]
  };

  state = {
    ingredients: [],
    nextIngredient: '',
    canSearch: false,
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
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 recipes-col">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                <RecipeItemList {...this.props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
