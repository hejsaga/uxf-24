import React, { Component } from "react"; // Importerar React och Component-klassen

// Definierar en klasskomponent som ärver från React.Component
class ExampleClassComponent extends Component {
  // Konstruktorn anropas först när komponenten skapas
  constructor(props) {
    super(props); // Anropar super för att få tillgång till this.props
    this.state = { count: 0 }; // Skapar en lokal state-variabel count
    console.log("Konstruktorn körs!"); // Loggar när konstruktorn körs, vilket är innan något syns på skärmen

    /* Vad är `this`?
     * - `this` refererar till instansen av klassen `ExampleClassComponent`.
     * - I klasskomponenter behöver vi ofta använda `this` för att komma åt state och metoder.
     * - Om vi skapar en metod och vill använda `this.setState`, måste vi ibland binda `this` manuellt.
     * - Exempel: this.handleClick = this.handleClick.bind(this);
     * - Detta var en av nackdelarna med klasskomponenter – risken att `this` inte pekar på rätt objekt.
     */
  }

  // Render-metoden är obligatorisk i klasskomponenter och returnerar JSX
  render() {
    return (
      <div>
        <h2>Klasskomponent</h2>
      </div>
    );
  }
}

// Exporterar komponenten så att den kan användas i andra filer
export default ExampleClassComponent;
