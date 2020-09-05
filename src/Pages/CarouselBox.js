import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bmwImg from '../Assets/bmw.jpg';
import AudiImg from '../Assets/Audi.jpg';
import mersImg from '../Assets/mers.jpg';


class CarouselBox extends Component {
    render() {
        return (
            <Carousel style={{width: '90%', margin: '0 auto'}}>
                <Carousel.Item>
                    <img src={bmwImg}
                         alt="BMW"
                         className='d-block w-100'/>
                    <Carousel.Caption>
                        <h3>BMW X6</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={AudiImg}
                         alt="Audi"
                         className='d-block w-100'/>
                    <Carousel.Caption>
                        <h3>Audi</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mersImg}
                         alt="MERS"
                         className='d-block w-100'/>
                    <Carousel.Caption>
                        <h3>mers</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default CarouselBox;