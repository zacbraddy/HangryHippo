import React, { Component } from 'react';
import './App.css';
import RecipeItemList from './recipeItemList/components/RecipeItemList';

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

  render() {
    return (
      <div className="App container-fluid">
        <div className="row content-row">
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
