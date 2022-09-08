import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <ClassComponent />
        <h5>Dibuat menggunakan class component</h5><br /><br /><br />
        
        <FunctionComponent />
        <h5>Dibuat menggunakan function component</h5>
      </div>
    )
  }
}

export default App;