import React from 'react';
import ListItem from '../../ListItem/components/ListItem';
import PropTypes from 'prop-types';
import '../styles/RemovableListItem.css';

const propTypes = {
  children: PropTypes.string,
  removeItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const RemovableListItem = (props) => (
  <div>
    <button className="btn btn-danger remove-list-item" onClick={(e) => props.removeItem(props.index)}>
      <i className="glyphicon glyphicon-remove" />
    </button>
    <ListItem>
      {props.children}
    </ListItem>
  </div>
);

RemovableListItem.proptypes = propTypes;
export default RemovableListItem;

