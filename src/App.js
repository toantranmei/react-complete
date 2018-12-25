// Import all dependences
import React, { Component } from "react";
import "./App.css";
import AppAnimal from "./Animals/Animal";

// Define a component (extends Component)
class App extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-body">This is some text within a card body.</div>
				<h1>Hello React</h1>
				<AppAnimal
					name="Panda"
					color="Black and white"
				/>
				<AppAnimal
					name="Dog"
					color="Black"
				>
					<h3>This is second hobies animal</h3>
				</AppAnimal>
			</div>
		);
	}
}

// Export component assign a name
export default App;
