import React from 'react';
import PropTypes from 'prop-types';
import AddTextInput from '../../AddTextInput/components/AddTextInput';
import ListItem from '../../ListItem/components/ListItem';
import '../styles/IngredientList.css';

const propTypes = {
  ingredients: PropTypes.array,
  nextIngredient: PropTypes.string,
  addIngredient: PropTypes.func.isRequired,
  handleAddNextChange: PropTypes.func.isRequired,
};

const IngredientList = (props) => (
  <div className="panel panel-default ingredients-panel hangry-panel">
    <div className="panel-body">
      Quick give me a list of the ingredients in your fridge! Don't worry, we're here to help.
      {
        props.ingredients
        && props.ingredients.length > 0
        && props.ingredients.map((ingredient, index) => {
            return <ListItem key={index}>{ingredient}</ListItem>
          })
      }
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