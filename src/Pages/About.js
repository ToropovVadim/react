import React, {Component} from 'react';
import {Tab, Nav, Row, Col,} from "react-bootstrap";
import designImg from '../Assets/design.jpg';
import reactImg from '../Assets/react.jpg';

class About extends Component {
    render() {
        let styleImg = {
            width:'100%',
            padding:'7px'

        }
        return (
            // <Container style={{marginTop: '15px'}}>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                    <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <div style={{border:'5px solid #FC6767'}}>
                                    <img src={designImg} style={{width:'90%'}}  alt='text'/>
                                    </div>
                                    <p style={{width: '90%', fontSize:'14px'}}> Design Your Own Free Website. Fully Customizable Web
                                        Templates. Social media compatible. Traffic generation tools.
                                        Multiple payment methods. Easy-to-add blog. SEO wizard.
                                        Mobile optimized. Customizable online store.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img style={styleImg}
                                        src="https://assets.materialup.com/uploads/dae0d4d2-c8ef-48fb-a21e-8cc8e207b136/preview.png"
                                        alt='text'/>
                                    <p style={{width: '90%'}}>Для выравнивания влево, вправо и по центру доступны
                                        адаптивные классы, которые используют те же точки останова по ширине области просмотра,
                                        что и система сетки.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img style={styleImg}
                                        src="https://cdn.dribbble.com/users/2577653/screenshots/5413897/cover_-_original_2x.png"
                                        alt='text'/>
                                    <p style={{width: '90%'}}>Для выравнивания влево, вправо и по центру доступны
                                        адаптивные классы, которые используют те же точки останова по ширине области просмотра,
                                        что и система сетки.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src={reactImg} style={styleImg} alt='text'/>
                                    <br/>
                                    <p style={{width: '88%'}}>React — відкрита JavaScript бібліотека для створення
                                        інтерфейсів користувача, яка покликана вирішувати проблеми часткового
                                        оновлення вмісту веб-сторінки, з якими стикаються в розробці
                                        односторінкових застосунків. Розробляється Facebook,
                                        Instagram і спільнотою індивідуальних розробників</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img style={styleImg}
                                        src="https://cdn.dribbble.com/users/2577653/screenshots/5413897/cover_-_original_2x.png"
                                        alt='text'/>
                                    <p style={{width: '90%'}}>Для выравнивания влево, вправо и по центру доступны
                                        адаптивные классы, которые используют те же точки останова по ширине области просмотра,
                                        что и система сетки.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            // </Container>
        );
    }
}

export default About;

