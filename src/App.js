import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // first we create a name state in the constructor
      name: {["Mariam", "Long", "Arthur"]}
    };
    // the name state can be changed with the changeName function
    // notice that change name is bind to 'this'
    this.changeName = this.changeName.bind(this);
  }

// newName is going to be passed tot eh changeName function , we're invoking it
changeName(newName) {
console.log(this)
this.setState({
  name = newName
});
}

render() {
    return (
      <form>
        <input onChange={this.changeName} value={this.state.name} />
      </form>
    )
  }
}





export default App;
