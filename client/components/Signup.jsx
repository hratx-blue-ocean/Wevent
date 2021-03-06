import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = ({
  handleStateChange,
  signUpDisplayName,
  signUpPassword,
  signUpCity,
  states,
  handleSignUpSubmit,
}) => (
  <div id="signup">
    <Form>
      <Form.Group controlId="Username">
        <Form.Label>Display Name:</Form.Label>
        <Form.Control type="displayName" placeholder="Display Name" value={signUpDisplayName} onChange={(e) => handleStateChange(e.target.value, 'signUpDisplayName')} style={{ width: 575 }} />
      </Form.Group>
      <Form.Group controlId="Password">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" value={signUpPassword} onChange={(e) => handleStateChange(e.target.value, 'signUpPassword')} style={{ width: 575 }} />
      </Form.Group>
      <Form.Group controlId="City">
        <Form.Label>City:</Form.Label>
        <Form.Control type="city" placeholder="City" value={signUpCity} onChange={(e) => handleStateChange(e.target.value, 'signUpCity')} style={{ width: 575 }} />
      </Form.Group>
      <Form.Group controlId="State">
        <Form.Label>State:</Form.Label>
        <Form.Control onChange={(e) => handleStateChange(e.target.value, 'signUpState')} as="select" style={{ width: 575 }}>
          <option>Select State</option>
          {states.map((state, index) => (
            <option key={state.state_id}>{state.state_name}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>

    <Button varient="primary" type="submit" id="signupButton" onClick={handleSignUpSubmit}>
      Signup
    </Button>
  </div>
);

export default Signup;
