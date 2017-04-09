import React from 'react';
import PropTypes from 'prop-types';
import AddTextInput from '../../AddTextInput/components/AddTextInput';
import RemovableListItem from '../../RemovableListItem/components/RemovableListItem';
import '../styles/IngredientList.css';

const propTypes = {
  ingredients: PropTypes.array,
  nextIngredient: PropTypes.string,
  addIngredient: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  handleAddNextChange: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  canSearch: PropTypes.bool,
};

const IngredientList = (props) => (
  <div className="panel panel-default ingredients-panel hangry-panel">
    <div className="panel-body">
      <div>
        Quick give me a list of the ingredients in your fridge! Don't worry, we're here to help.
      </div>
      <div>
        <button className="btn btn-success ingredients-go-button" onClick={props.doSearch} disabled={!props.canSearch}>Feed me!!</button>
      </div>
      <div className="ingredients-list-container">
        {
          props.ingredients
          && props.ingredients.length > 0
          && props.ingredients.map((ingredient, index) => {
              return <RemovableListItem key={index} index={index} removeItem={props.removeIngredient}>{ingredient}</RemovableListItem>
            })
        }
      </div>
      <AddTextInput
        id="nextIngredient"
        placeholder="Add another ingredient"
        value={props.nextIngredient}
        addHandler={props.addIngredient}
        changeHandler={props.handleAddNextChange}
      />
    </div>
  </div>
);

IngredientList.propTypes = propTypes;

export default IngredientList;