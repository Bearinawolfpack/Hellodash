import React from 'react';

class FindIdentity extends React.Component {
  state = {
    stateComponent: false,
  };

  render() {
    const Identity = () => {
      return 'This is the identity function';
    };

    const clickHandler = () => {
      Identity();
    };

    return (
      <div>
        <button type="button" onClick={() => clickHandler}>
          Identity
        </button>
        <p>{Identity()}</p>
      </div>
    );
  }
}

export default FindIdentity;

// Description: This method returns the first argument it receives.
// Arguments: 1. value (*): Any value.
// Returns: (*): Returns value.
// Example
// var object = { 'a': 1 };

// console.log(_.identity(object) === object);
// // => true
