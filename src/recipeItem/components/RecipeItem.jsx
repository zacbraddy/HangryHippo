import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipeItem.css';

const RecipeItem = (props) => (
  <div className="list-item-card recipe-list-item">
    <div className="recipe-item-content-container">
      <div className="recipe-list-item-image-container">
        <img src={props.image} className="img-responsive recipe-list-item-image" alt={props.title}/>
      </div>
      <div className="recipe-list-item-text-container">
        <div className="recipe-list-item-title">{props.title}</div>
        <div className="recipe-list-item-used-ingredients">
          You have {`${props.missedIngredientCount === 0 ? "all" : ""}`} {props.usedIngredientCount} ingredients
        </div>
        {
          props.missedIngredientCount > 0 &&
          <div className="recipe-list-item-missing-ingredients">There's {props.missedIngredientCount} missing though</div>
        }
      </div>
    </div>
    <i className="recipe-list-item-chevron glyphicon glyphicon-chevron-right" />
  </div>
);

RecipeItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  usedIngredientCount: PropTypes.number,
  missedIngredientCount: PropTypes.number,
};

export default RecipeItem;
