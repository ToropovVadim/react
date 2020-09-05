import React, {Component} from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";

class Contacts extends Component {
    render() {
        return (
            <div style={{width:'50%', padding:'25px', margin:'0 auto'}}>

                <h1 className='text-center'>Contact us</h1>
            <Form>
                <FormGroup controlId='formBasicEmail'>
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text>
                        We'll never share your email with anyone else
                    </Form.Text>
                </FormGroup>

                <FormGroup controlId='formBasicPassword'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as='textarea' rows='3' />
                </FormGroup>

                <FormGroup controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check me out' />
                </FormGroup>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
            </div>
        );
    }
}

export default Contacts;