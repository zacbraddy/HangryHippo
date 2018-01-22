import React, { Component } from 'react';
import RecipeItem from "../../recipeItem/components/RecipeItem";
import "../styles/recipeItemList.css";

export default class RecipeItemList extends Component {
  render() {
    return (
      <div className="recipe-item-list">
          {
            (!this.props.items || this.props.items.length === 0)
              && 'No recipes found'
          }
          {
            this.props.items 
              && this.props.items.length > 0 
              && this.props.items.map(
                (item, index) => (<RecipeItem {...item} key={index} />)
              )
          }
      </div>
    );
  }
}
