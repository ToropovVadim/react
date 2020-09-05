import React, {Component} from 'react';
import { Col, Row, Card, ListGroup, Form, FormGroup, Button} from "react-bootstrap";
import BlogPost from "./BlogPost";


let image = 'https://w7.pngwing.com/pngs/785/84/png-transparent-computer-icons-man-icon-miscellaneous-logo-black.png'
class Blog extends Component {
    render() {
        let cont ={
            marginTop: '15px' ,
            width: '70%',
            fontSize: '18px',
            fontWeight: 'bold',
            paddingLeft:'20px'
    };

        return (
                <Row>
                    <Col md='8'>
                        <div style={cont}>
                        {/*<h2>Contact us</h2>*/}
                        <Form >
                            <FormGroup controlId='formBasicPassword'>
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control type="blog_name" placeholder="Your name:" /><br/>
                                <Form.Control type='blog_comment' as='textarea' rows='4' placeholder="Comment:" />
                            </FormGroup>

                            <Button variant='primary' size="lg" block type='submit'>Submit</Button>
                        </Form>
                        </div>
                        <div style={{width:'450px'}}>

                        <BlogPost blog_name='Adik' like='1' blog_image={image} blog_comment='JavaScript — динамічний, Реалізація стандарту ECMAScrip.'/>
                        <BlogPost blog_name='Marik' like='1' blog_image={image} blog_comment='Реалізація стандарту ECMAScrip.'/>
                        <BlogPost like='0'/>
                        </div>

                    </Col>
                    <Col md='4'>
                        <div style={{marginRight:'20px'}}>
                        <h5 className='text-center mt-3'>Categories</h5>
                        <Card >
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    JavaScript — динамічна, об'єктно-орієнтована прототипна мова
                                    програмування. Реалізація стандарту ECMAScrip.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
        );
    }
}

export default Blog;