import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

export default Display;