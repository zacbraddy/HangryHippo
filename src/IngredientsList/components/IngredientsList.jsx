import React from 'react';
import IngredientListItem from '../../IngredientListItem/components/IngredientListItem';
import AddTextItemInput from '../../AddTextItemInput/components/AddTextItemInput';
import '../styles/ingredientsList.css';

const hasIngredients = props => props.ingredients && props.ingredients.length > 0;

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
          hasIngredients(props)
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
        <AddTextItemInput
          id="nextIngredient"
          placeholder="Add another ingredient"
          value={props.nextIngredient}
          addHandler={props.addIngredient}
          changeHandler={props.handleAddNextChange}
          canAddItem={!hasIngredients(props) || props.canSearch}
        />
      </div>
    </div>
  );
};

export default IngredientsList;
