import React, {Component} from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ComponentA/>
            </div>
        );
    }
}

export default App;
