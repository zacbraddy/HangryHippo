import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipe.css';

const propTypes = {
  instructions: PropTypes.string,
  hideRecipe: PropTypes.func,
};

const recipe = props => {
  const instructions = props.instructions && props.instructions.length > 0
    ? props.instructions
    : 'Loading recipe...';
    
  return (
    <div>
      <button className="recipe-back-button btn btn-info" onClick={props.hideRecipe}>Back</button>
      <div className="recipe" dangerouslySetInnerHTML={{__html: instructions}} />
    </div>
  );
};

recipe.propTypes = propTypes;

export default recipe;
