import React, { Component } from 'react';
import Display from './Display';
import ColouredConsole from './colourConsole';

import './App.css';

class App extends Component {
  static defaultProps = {
    helloMessage: `G'day World!`,
    goodbyeMessage: 'See ya world!',
    helloButtonText: "Hiya",
    goodbyeButtonText: "See ya",
  };

  constructor(props) {
    super(props);

    this.state = {
      hello: true,
      visible: true,
      time: new Date(),
    };

    this.colouredConsole = new ColouredConsole();
    this.colouredConsole.setColour('#333', '#ff99c3');
    this.colouredConsole.log('App: constructor', ' just fired!');
  }

  componentWillMount() {
    this.setState({
      hello: this.props.defaultHello,
    });
    this.colouredConsole.log('App: componentWillMount', ' just fired!');
  }

  componentDidMount() {
    this.colouredConsole.log('App: componentDidMount', ' just fired!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.colouredConsole.log('App: shouldComponentUpdate', ` just fired with nextProps set to: ${JSON.stringify(nextProps)}; and nextState set to: ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    this.colouredConsole.log('App: componentWillUpdate', ` just fired with nextProps set to: ${JSON.stringify(nextProps)}; and nextState set to: ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps, prevState) {
    this.colouredConsole.log('App: componentDidUpdate', ` just fired with prevProps set to: ${JSON.stringify(prevProps)}; and prevState set to: ${JSON.stringify(prevState)}`);
  }

  get Message() {
    return this.state.hello
            ? this.props.helloMessage
            : this.props.goodbyeMessage;
  }

  get ButtonText() {
    return !this.state.hello
            ? this.props.helloButtonText
            : this.props.goodbyeButtonText;
  }

  handleMessageButtonClick = () => {
    this.setState(
      {
        hello: !this.state.hello
      }
    )
  };

  handleUpdateTimeClick = () => {
    this.setState(
      {
        time: new Date(),
      }
    )
  };

  handleHideButtonClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    this.colouredConsole.log('App: render', ' just fired!');
    return (
      <div>
        {
          this.state.visible &&
          (<div>
            <Display message={this.Message}/>
            <button onClick={this.handleMessageButtonClick}>
              {this.ButtonText}
            </button>
            <div>
              {this.state.time.toString()}
            </div>
            <button onClick={this.handleUpdateTimeClick}>
              Update Time
            </button>
          </div>)
        }
        <div>
          <button onClick={this.handleHideButtonClick}>
            { this.state.visible ? 'Hide App' : 'Show App' }
          </button>
        </div>
      </div>
    );
  }
}

export default App;
