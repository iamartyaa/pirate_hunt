import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function SignUp() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
        </Card.Body>
        <Form>
          <Form.Group id="email" className="p-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="username" className="p-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" ref={usernameRef} required />
          </Form.Group>
          <Form.Group id="password" className="p-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <div className="container w-50 ">
            <Button type="submit" className="w-100 mb-3">
              Sign Up
            </Button>
          </div>
        </Form>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
}
