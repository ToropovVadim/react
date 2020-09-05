import React, {Component} from 'react';
import Vadik from '../Assets/vadik.jpg'
import r from '../style/resume.module.css'
// import {Container} from "react-bootstrap";


class Resume extends Component {
    render() {
        return (
            <div className={r.blockResume}>
                <div className={r.boxContact}>
                    <img className={r.imgVadik} src={Vadik} alt="My foto"/>
                    <div className={r.box_aside_text}>
                        <h2 className={r.title_contacts}>Contacts</h2>
                        <div><span className={r.box_C}>C:</span>
                            <a href="tel:+380938025744">+38 0938025744</a></div>
                        <div><span className={r.box_C}>E:</span>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">varik.toropov@gmail.com</a></div>
                        <div><span className={r.box_C}>G:</span>
                            <a href="https://github.com/ToropovVadim">github.com/ToropovVadim</a></div>
                        <h2 className={r.title_Tech_Skills}> Tech Skills</h2>
                        <ul className={r.listUl}>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>HTML5</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>CSS3</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>GIT</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>JavaScript</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>React.js</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>Node.js</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>Python</span></li>
                            <li className={r.li_Tech_Skills}><span className={r.span_Tech_Skills}>Django 3</span></li>
                        </ul>
                        <h2 className={r.title_Soft_Skills}>Soft Skills</h2>
                        <ul className={r.listUl}>
                            <li className={r.li_Soft_Skills}><span className={r.span_Soft_Skills}>Sociable</span></li>
                            <li className={r.li_Soft_Skills}><span className={r.span_Soft_Skills}>Punctual</span></li>
                            <li className={r.li_Soft_Skills}><span className={r.span_Soft_Skills}>Teamwork</span></li>
                        </ul>
                    </div>
                </div>
                <div className={r.resumeContent}>
                    <h3 className={r.Front_End_Developer}>Front-End Junior</h3>
                    <h1 className={r.Vadik_Toropov}>Vadik Toropov</h1>
                    <p className={r.content_text}>I am responsible person and used to payattention to even those litle this
                        that few people
                        pay attentiom to. I believe that there is no limit to perfection, so I alwsys try to learn something
                        new and improve.
                        Try and fail , but don't interrupt your afforts ( Stephen Caggwa )
                    </p>

                    <h2 className={r.tile_work_experince}>Work Experience</h2>
                    <h3 className={r.title_front_end_developer}>Front End Junior <span
                        className={r.span_colors_title_front_end_developer}>Self-taught</span></h3>
                    <h4 className={r.p_data}>July 2020 up to now <span className={r.span_p_data}>|</span> Ukraine
                    </h4>
                    <ul className={r.listUl}>
                        <li className={r.ul_li_projects}>Studied on YouTube channels "Фрилансер по жизни". Front-End training topic.</li>
                        <li className={r.ul_li_projects}>Exploring the React library on the "IT-KAMASUTRA" YouTube channel.</li>

                        <h4 className={r.p_data} style={{paddingTop:'20px'}}>February 2020 <span className={r.span_p_data}>|</span> Ukraine</h4>
                        <li className={r.ul_li_projects}>Training on the YouTube channel Python, Django 3.
                        </li>
                        <li className={r.ul_li_projects}>Passage of a course on Stepik programs. Received 84% Python certification.</li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Resume;