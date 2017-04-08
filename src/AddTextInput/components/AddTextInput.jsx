import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AddTextInput.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  addHandler: PropTypes.func,
  handleAddNextChange: PropTypes.func,
};

const AddTextInput = (props) => (
  <div className="form-group add-container">
    <label htmlFor={props.id} className="sr-only">Add another ingredient</label>
    <div className="input-group">
      <input
        id={props.id}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(ev) => { props.changeHandler(ev.target.value)}}
        onKeyPress={(ev) => { ev.key === 'Enter' && props.addHandler()}}
      />
      <span className="input-group-btn">
        <button
          type="button"
          className="btn btn-success"
          onClick={props.addHandler}
        >
          <i className="glyphicon glyphicon-plus add-icon" />
        </button>
      </span>
    </div>
  </div>
);

AddTextInput.proptypes = propTypes;

export default AddTextInput;
