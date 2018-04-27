import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipe.css';

const propTypes = {
  instructions: PropTypes.string,
  hideRecipe: PropTypes.func,
};

const recipe = props => {
  const instructions = props.instructions.length > 0
    ? props.instructions
    : 'Loading recipe...';
    
  return (
    <div>
      <button class="btn btn-info" onClick={props.hideRecipe}>Back</button>
      <div class="recipe" dangerouslySetInnerHTML={{__html: instructions}} />
    </div>
  );
};

recipe.propTypes = propTypes;

export default recipe;
