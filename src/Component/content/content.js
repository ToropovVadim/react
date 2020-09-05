import React from 'react';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contacts from "../../Pages/Contacts";
import Blog from "../../Pages/Blog";
import NewProject from "../../Pages/NewProject";
import Resume from "../../Pages/Resume";
import c from './content.module.css'

const Content = () => {
    return (
            <Container>
                <div className={c.contentBlock}>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contacts' component={Contacts}/>
                        <Route exact path='/blog' component={Blog}/>
                        <Route exact path='/NewProject' component={NewProject}/>
                        <Route exact path='/Resume' component={Resume}/>
                    </Switch>
                </Router>
                </div>
            </Container>
    );
};

export default Content;
