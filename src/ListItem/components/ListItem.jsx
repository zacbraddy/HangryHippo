import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ListItem.css';

const propTypes = {
  children: PropTypes.any,
};

const ListItem = (props) => (
  <div className="list-item-card">
    {props.children}
  </div>
);

ListItem.proptypes = propTypes;
export default ListItem;

