import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeItem from '../../recipeItem/components/RecipeItem';
import '../styles/recipeItemList.css';

export default class RecipeItemList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      usedIngredientCount: PropTypes.number,
      missedIngredientCount: PropTypes.number,
      likes: PropTypes.number,
      showRecipe: PropTypes.func,
    }))
  };

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
                (item, index) => (<RecipeItem {...item} showRecipe={this.props.showRecipe} key={index} />)
              )
          }
      </div>
    );
  }
}
