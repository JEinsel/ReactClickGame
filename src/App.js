import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/card-list"
import monsters from "./monsters.json"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: monsters,
      nameArray: [],
      score: 0
    }

  }


  shuffle = () => {
    const monsterCopy = this.state.monsters
    for (let i = monsterCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [monsterCopy[i], monsterCopy[j]] = [monsterCopy[j], monsterCopy[i]];
    }
    this.setState({ monsters: monsterCopy })
    return;
  }

  clickHandler = (name) => {
    if (this.state.nameArray.indexOf(name) === -1) {
      let nameCopy = this.state.nameArray
      let scoreCopy = this.state.score
      scoreCopy++
      nameCopy.push(name)
      console.log(scoreCopy)
      this.setState({ nameArray: nameCopy, score: scoreCopy })
      console.log("Line 38 success")
    } else {
      console.log("Line 40 App.js")
      this.setState({ nameArray: [], score: 0 })
    }
    this.shuffle()
  }

  winLose = () => {
    if (this.state.score === 12) {
      alert("You win!")
      this.shuffle()
    } 
  }
  render() {
    return (
      <div className="App" >
        <div>
          <h1>Clicky game!</h1>
          <h1>Your score: <span>{this.state.score}</span></h1>
        </div>
        <CardList clickHandler={this.clickHandler} monsters={this.state.monsters}>
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
