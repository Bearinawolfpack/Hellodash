import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FindIdentity extends React.Component {
  state = {
    showResult: false,
    anyValue: '',
  };

  render() {
    const Identity = (value) => {
      console.log(value);
      return <h4>{value}</h4>;
    };

    const submitHandler = (event) => {
      event.preventDefault();
      this.setState({ showResult: true });
    };

    const resetHandler = () => {
      this.setState({ showResult: false, anyValue: '' });
    };

    const changeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    const showResult = this.state.showResult;

    return (
      <Container>
        <Form onSubmit={submitHandler} onReset={resetHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="anyValue"
              type="text"
              placeholder="Enter Any Value"
              onChange={changeHandler}
              value={this.state.anyValue}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
        </Form>
        {this.state.showResult
          ? Identity(this.state.anyValue)
          : "Type and Value then hit 'Submit'"}
      </Container>
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
