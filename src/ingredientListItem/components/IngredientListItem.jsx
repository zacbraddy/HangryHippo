import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ingredientListItem.css';

const propTypes = {
  children: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  canSearch: PropTypes.bool,
};

const IngredientListItem = props => (
  <div className="ingredient-list-item">
    <div className="ingredient-list-item-value">
      {props.children}
    </div>
    <div className="ingredient-list-item-button-container">
      <button disabled={!props.canSearch} className="btn btn-danger btn-ingredient-list-item" onClick={e => props.removeItem(props.index)}>
        <i className="glyphicon glyphicon-remove" />
      </button>
    </div>
  </div>
);

IngredientListItem.proptypes = propTypes;

export default IngredientListItem;
