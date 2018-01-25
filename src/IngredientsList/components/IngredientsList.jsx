import React from 'react';
import IngredientListItem from '../../IngredientListItem/components/IngredientListItem';
import '../styles/ingredientsList.css';

const IngredientsList = (props) => {
  return (
    <div className="ingredients-panel">
      <div className="ingredients-panel-text">
        Quick give me a list of the ingredients in your fridge! Don't worry, we're here to help.
      </div>
      <div>
        <button
          className="btn btn-info ingredients-go-button"
          onClick={props.doSearch}
          disabled={!props.canSearch}
        >
          Feed me!!
        </button>
      </div>
      <div className="ingredients-list-container">
        {
          props.ingredients
          && props.ingredients.length > 0
          && props.ingredients.map((ingredient, index) => {
              return <IngredientListItem
                        key={index}
                        index={index}
                        removeItem={props.removeIngredient}
                      >
                        {ingredient}
                      </IngredientListItem>
            })
        }
      </div>
    </div>
  );
};

export default IngredientsList;
