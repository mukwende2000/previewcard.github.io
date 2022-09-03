import React from "react";
import Details from "./components/Details";
import Frame from './components/Frame'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Frame/>
        <Details/>
      </div>
    );
  };
}

export default App;