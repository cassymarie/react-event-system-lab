// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      
    };
  }

  handleFocus = () => {
    // Update our state here...
    console.log(`Good!`)
  };

  handleBlur = () => {
    // Update our state here...
    console.log(`Hey! Eyes on me!`)
  };

  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
      </div>
    );
  }
}

export default EyesOnMe;