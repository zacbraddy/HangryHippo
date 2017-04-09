import React, { Component } from 'react';
import Header from './Header/components/Header';
import IngredientList from './IngredientList/components/IngredientList';
import liveApi from './liveApi';
import './App.css';

class App extends Component {
  state = {
    ingredients: [],
    nextIngredient: '',
    results: '',
    canSearch: false,
  };

  addIngredient = () => {
    if (this.state.nextIngredient.length === 0) return;

    this.setState({
      ingredients: this.state.ingredients.concat(this.state.nextIngredient),
      nextIngredient: '',
      canSearch: true,
    });
  };

  removeIngredient = (indexToRemove) => {
    const newIngredients = this.state.ingredients.concat([]);
    newIngredients.splice(indexToRemove, 1);
    const newCanSearch = newIngredients.length !== 0;

    this.setState({
      ingredients: newIngredients,
      canSearch: newCanSearch,
    });
  };

  handleAddNextChange = (newAddNextIngredient) => {
    this.setState({
      nextIngredient: newAddNextIngredient
    });
  };

  doSearch = () => {
    this.setState({
      canSearch: false,
    });

    liveApi(this.state.ingredients.join(',')).then((recipes) => {
      this.setState({
        results: JSON.stringify(recipes),
        canSearch: true,
      });
    });
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="row container-fluid">
          <Header />
        </div>
        <div className="row content-row">
          <div className="col-lg-4 ingredients-col">
            <IngredientList
              ingredients={this.state.ingredients}
              nextIngredient={this.state.nextIngredient}
              addIngredient={this.addIngredient}
              doSearch={this.doSearch}
              removeIngredient={this.removeIngredient}
              handleAddNextChange={this.handleAddNextChange}
              canSearch={this.state.canSearch}
            />
          </div>
          <div className="col-lg-8">
            <div className="panel panel-default hangry-panel">
              <div className="panel-body">
                {this.state.results}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
