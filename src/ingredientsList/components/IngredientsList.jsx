import React from 'react';
import PropTypes from 'prop-types';
import IngredientListItem from '../../ingredientListItem/components/IngredientListItem';
import AddTextItemInput from '../../addTextItemInput/components/AddTextItemInput';
import '../styles/ingredientsList.css';

const hasIngredients = props => props.ingredients && props.ingredients.length > 0;

const propTypes = {
  ingredients: PropTypes.array,
  nextIngredient: PropTypes.string,
  addIngredient: PropTypes.func.isRequired,
  handleAddNextChange: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  canSearch: PropTypes.bool,
};

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

IngredientsList.propTypes = propTypes;

export default IngredientsList;

