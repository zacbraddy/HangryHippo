import React from 'react';
import ListItem from '../../ListItem/components/ListItem';
import PropTypes from 'prop-types';
import '../styles/RecipeListItem.css';

const propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  owned: PropTypes.number,
  missing: PropTypes.number,
};

const RecipeListItem = (props) => (
  <ListItem>
    <button className="btn btn-default btn-recipe-list-item-open-recipe">
      <i className="glyphicon glyphicon-chevron-right" />
    </button>
    <div className="recipe-list-item-image-container">
      <img src={props.image} className="img-responsive recipe-list-item-image" />
    </div>
    <div className="recipe-list-item-text-container">
      <div className="recipe-list-item-title">{props.title}</div>
      <div>
        You have {props.owned} ingredients
      </div>
      <div>There's {props.missing} missing though</div>
    </div>
  </ListItem>
);

RecipeListItem.proptypes = propTypes;
export default RecipeListItem;

