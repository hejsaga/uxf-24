import React, { Component } from "react";

class ExampleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "Hej!",
    };
  }

  componentDidMount() {
    console.log("Komponenten har monterats!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Kör uppdatering");
    if (prevState.count !== this.state.count) {
      console.log("Räknaren har uppdaterats!", this.state.count);
    }

    if (prevState.text !== this.state.text) {
      console.log("Texten har uppdaterats!", this.state.text);
    }
  }

  componentWillUnmount() {
    console.log("Komponenten tas bort!");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  updateText = () => {
    this.setState({
      text: "Ny text: " + Math.random().toString(36).substring(7),
    });
  };

  render() {
    return (
      <div>
        <h2>Klasskomponent</h2>
        <p>Räknare: {this.state.count}</p>
        <p>Text: {this.state.text}</p>
        <button onClick={this.increment}>Öka</button>
        <button onClick={this.updateText}>Uppdatera text</button>
      </div>
    );
  }
}

export default ExampleClassComponent;
