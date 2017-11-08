import React, { Component } from 'react';
import './App.css';

class App extends Component {
    static defaultProps = {
        id: 641803,
        title: "Easy & Delish! ~ Apple Crumble",
        image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
        usedIngredientCount: 3,
        missedIngredientCount: 4,
        likes: 1
    };

    render() {
        return (
            <div className="list-item-card recipe-list-item">
              <div className="recipe-item-content-container">
                <div className="recipe-list-item-image-container">
                  <img src={this.props.image} className="img-responsive recipe-list-item-image" alt={this.props.title}/>
                </div>
                <div className="recipe-list-item-text-container">
                  <div className="recipe-list-item-title">{this.props.title}</div>
                  <div className="recipe-list-item-used-ingredients">
                    You have {`${this.props.missedIngredientCount === 0 ? "all" : ""}`} {this.props.usedIngredientCount} ingredients
                  </div>
                  {
                    this.props.missedIngredientCount > 0 &&
                    <div className="recipe-list-item-missing-ingredients">There's {this.props.missedIngredientCount} missing though</div>
                  }
                </div>
              </div>
              <i className="recipe-list-item-chevron glyphicon glyphicon-chevron-right" />
            </div>
        );
    }
}

export default App;
