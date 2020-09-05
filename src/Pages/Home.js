import React, {Component} from 'react';
import CarouselBox from "./CarouselBox";
import { CardDeck, Card, Button} from "react-bootstrap";


class Home extends Component {
    render() {
        return (
            <div>
            <CarouselBox />
                <h2 className= 'text-center m-4'>Our team</h2>
                <CardDeck className='m-3' text='primary' >
                    <Card>
                        <Card.Img
                            variant = 'top'
                            src='https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text id='CardText'>
                                If your application contains a large number of form groups,
                                we recommend building a higher-level component encapsulating .
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text id='CardText'>
                                If your application contains a large number of form groups,
                                we recommend building a higher-level component encapsulating .
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                        <Card.Img
                            variant = 'bottom'
                            src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                    </Card>

                    <Card>
                        <Card.Img
                            variant = 'top'
                            src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text id='CardText'>
                                If your application contains a large number of form groups,
                                we recommend building a higher-level component encapsulating .
                            </Card.Text>
                            <Button variant='primary'>About team</Button>
                        </Card.Body>
                    </Card>


                </CardDeck>
            </div>
        );
    }
}

export default Home;
