import React, { Component } from 'react';
import Header from './Header/components/Header';
import IngredientList from './IngredientList/components/IngredientList';
import './App.css';

class App extends Component {
  state = {
    ingredients: [],
    nextIngredient: '',
  };

  addIngredient = () => {
    this.setState({
      ingredients: this.state.ingredients.concat(this.state.nextIngredient),
      nextIngredient: '',
    });
  };

  handleAddNextChange = (newAddNextIngredient) => {
    this.setState({
      nextIngredient: newAddNextIngredient
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
              handleAddNextChange={this.handleAddNextChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
