import React, {Component} from 'react';
import file from '../style/newFile.module.css';
import Benz from '../Assets/Benz.jpg';
import MBenz from '../Assets/MBenz.jpg';
import ZBenz from '../Assets/ZBenz.jpg';
import CarBenz from '../Assets/CarBenz.jpg';
import Car2Benz from '../Assets/Car2Benz.jpg';
import Car1Benz from '../Assets/Car1Benz.jpg';
import amg_1 from '../Assets/amg_1.jpg';
import { Row, Col, Tab, Tabs} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";


class NewProject extends Component {
    render() {
        return (
             <div style={{marginTop: '5px', padding: '0'}}>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="option" id="uncontrolled-tab-example">
                            <Tab eventKey="option" title="Home">
                                <img src={Benz} alt='text' style={{width: "100%"}}/>

                                <Carousel>
                                    <Carousel.Item>
                                        <img src={CarBenz} alt="BMW" className='d-block w-100'/>
                                        <Carousel.Caption>
                                            <h3 className={file.text_title}>BMW X6</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Car1Benz}
                                             alt="Audi" className='d-block w-100'/>
                                        <Carousel.Caption>
                                            <h3 className={file.text_title}>Audi</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={Car2Benz} alt="MERS" className='d-block w-100'/>
                                        <Carousel.Caption>
                                            <h3 className={file.text_title}>Mers</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <Row>
                                    <Col style={{paddingRight: '0px'}}>
                                        <img src={MBenz} alt='text' style={{width: "100%"}}/>
                                        <h3 className={file.text_title}>Digital прем'єра нового Mercedes-Benz
                                            E-Class</h3>
                                        <p className={file.text_car}>Mercedes-Benz представив новий E-Class, незважаючи
                                            на скасування
                                            Женевського автосалону 2020 року. Офіційне представництво
                                            Mercedes-Benz в Україні, компанія «АвтоКапітал» (структурний
                                            підрозділ Корпорації УкрАВТО) повідомляє про запуск інноваційного
                                            формату новин на глобальній онлайн-платформі Mercedes me media. </p>
                                    </Col>
                                    <Col style={{paddingLeft: '0px'}}>
                                        <h3 className={file.text_title}> Mercedes-Benz E-Class</h3>
                                        <img src={ZBenz} alt='text' style={{width: "100%"}}/>
                                        <p className={file.text_car}>Mercedes-Benz представив новий E-Class. 8 липня на
                                            платформі
                                            Meet Mercedes DIGITAL презентували перший випуск, присвячений
                                            оновлень в новому Mercedes-Benz S-Class. Жодне інше нововведення
                                            за останні роки не змінило роботу Mercedes-Benz настільки радикально,
                                            як MBUX (Mercedes-Benz User Experience).</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <img
                                            src='https://www.mercedes-benz.bg/passengercars/content-pool/marketing-pool/product-page-stages/c-class-cabriolet-a205-stage/_jcr_content/par/stageelement.MQ6.0.20190904084351.jpeg'
                                            alt='text' style={{width: "100%"}}/>
                                        <h3 className={file.text_title}>Digital прем'єра нового Mercedes-Benz
                                            C-Class</h3>
                                        <p className={file.text_car}>C-класа Cabriolet се представя в най-добра форма
                                            както отвън, така и отвътре.
                                            C-класа Cabriolet идва директно от тренировъчния лагер и се представя в
                                            най-добра
                                            форма както отвън, така и отвътре.</p>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="amg" title="/// AMG">
                                <img className={`${file.amg_img} ${file.amg_border}`} src={amg_1} alt="AMG"/>
                                <div>

                                </div>
                            </Tab>
                            <Tab eventKey="amg_sport" title="/// AMG sport" disabled>

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewProject;

