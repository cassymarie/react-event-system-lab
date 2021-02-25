
import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      
    };
  }

  handleEvent = (e) => {
    console.log(`Entering password...`)
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleEvent}></input>
      </div>
    );
  }
}

export default Keypad;