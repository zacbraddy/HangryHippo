import React from 'react';
import PropTypes from 'prop-types';
import '../styles/addTextItemInput.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  addHandler: PropTypes.func,
  handleAddNextChange: PropTypes.func,
  canAddItem: PropTypes.bool,
};

const AddTextItemInput = props => (
  <div className="form-group add-container">
    <label htmlFor={props.id} className="sr-only">Add another ingredient</label> 
    <div className="input-group">
      <input
        id={props.id}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={ev => props.changeHandler(ev.target.value)}
        onKeyPress={ev => ev.key === 'Enter' && props.canAddItem && props.addHandler()}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-success"
          onClick={() => props.canAddItem && props.addHandler()}
          disabled={!props.canAddItem}
        >
          <i className="glyphicon glyphicon-plus add-icon" />
        </button>
      </span>
    </div>
  </div>
);

AddTextItemInput.propTypes = propTypes;

export default AddTextItemInput;

