import React, { Component } from 'react';
import ColouredConsole from './colourConsole';

class Display extends Component {
  constructor(props) {
    super(props);
    this.colouredConsole = new ColouredConsole();
    this.colouredConsole.setColour('#333', '#bada55');
    this.colouredConsole.log('Display: constructor', ' just fired!');
  }

  componentWillMount() {
    this.colouredConsole.log('Display: componentWillMount', ' just fired!');
  }

  componentDidMount() {
    this.colouredConsole.log('Display: componentDidMount', ' just fired!');
  }

  componentWillReceiveProps(nextProps) {
    this.colouredConsole.log('Display: componentWillReceiveProps', ` just fired with this for nextProps: ${JSON.stringify(nextProps)}`)
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.colouredConsole.log('Display: shouldComponentUpdate', ` just fired with nextProps set to: ${JSON.stringify(nextProps)}; and nextState set to: ${JSON.stringify(nextState)}`);
    return nextProps.message !== this.props.message;
  }

  componentWillUpdate(nextProps, nextState) {
    this.colouredConsole.log('Display: componentWillUpdate', ` just fired with nextProps set to: ${JSON.stringify(nextProps)}; and nextState set to: ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps, prevState) {
    this.colouredConsole.log('Display: componentDidUpdate', ` just fired with prevProps set to: ${JSON.stringify(prevProps)}; and prevState set to: ${JSON.stringify(prevState)}`);
  }

  componentWillUnmount() {
    this.colouredConsole.log('Display: componentWillUnmount', ' just fired!!');
  }

  render() {
    this.colouredConsole.log('Display: render', ' just fired!');
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

export default Display;