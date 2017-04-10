import React from 'react';
import RecipeListItem from '../../RecipeListItem/components/RecipeListItem';
import PropTypes from 'prop-types';
import '../styles/RecipeList.css';

const propTypes = {
  recipes: PropTypes.array,
};

const RecipeList = (props) => (
  <div className="panel panel-default recipes-panel hangry-panel">
    <div className="panel-body">
      {
        props.recipes.map((recipe, index) =>
          (<RecipeListItem
            title={recipe.title}
            image={recipe.image}
            owned={recipe.usedIngredientCount}
            missing={recipe.missedIngredientCount}
            key={index}
          />)
        )
      }
    </div>
  </div>
);

RecipeList.propTypes = propTypes;
export default RecipeList;

