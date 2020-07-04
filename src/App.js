import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./userInput/userInput";
import "./userOutput/userOutput";
import Comp1 from "./userInput/userInput";
import Comp2 from "./userOutput/userOutput";

class App extends Component {
  state = {
    person: [{ name: "ahsan" }],
  };

  nameChanger = (event) => {
    let oldState = [...this.state.person];
    oldState[0] = { name: event.target.value };
    this.setState({ person: oldState });
  };

  render() {
    const inlinestyle = {
      border: "3px solid red",
      width: "20%",
    };
    const inlinecss = {
      width: "30%",
      border: "2px dotted green",
      backgroundColor: "#eee",
      margin: "auto",
    };
    return (
      <div className="App">
        <Comp1
          style={inlinestyle}
          nameChange={this.nameChanger}
          username={this.state.person[0].name}
        />
        <Comp2 style={inlinecss} username={this.state.person[0].name} />
      </div>
    );
  }
}

export default App;
