import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list"
import monsters from "./monsters.json"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: monsters

    }

  }
  // componentDidMount() {
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then(response => response.json())
  //     .then(users => this.setState({ monsters: users }));
  // }

  render() {
    return (
      <div className="App" >
        <CardList monsters={this.state.monsters}>
          <h1></h1>
          {/* {
            
            this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
          } */}
        </CardList>
      </div >

    )
  }
}


export default App;
