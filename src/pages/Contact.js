import React from 'react';
import { Form, Container, Row } from 'react-bootstrap';

function Contact() {
    return (
        <div>
          <Container>
            <Row>
            <h1>Submit your details</h1>
                <Form>
                  <Form.Group controllId="forName"> 
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controllId="forEmail"> 
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controllId="forWebsite"> 
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="website" />
                  </Form.Group>
                  <Form.Group controllId="forMessage"> 
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Form>
      
                <span className="form__allow">
                <input type="checkbox"></input>
                  <label>Allow us to sell your personal details to whomever we want</label>
                </span>
                  <input type="submit" class="submitBtn" value="Submit"></input>

            <div className="contact__info">
                <span>
                    <p>hansenfp@gmail.com</p>
                </span>
                <span>
                    <p>123 456 7890</p>
                </span>
                <span>
                    <p>123 Some Street</p>
                    <p>Somewhere</p>
                    <p>Some City</p>
                    <p>10000</p> 
                </span>
            </div>
            </Row>
          </Container>
        </div>       
    )
}

export default Contact;
