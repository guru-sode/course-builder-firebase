import React, { Component } from 'react';
import '../styles/home.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CreateCourse from './createCourse';

class Home extends Component {
    // state = {  }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Course builder</h1>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            </div>
                            <ul className="nav navbar-nav">
                                <li><button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Categories
                                    <span className="caret"></span></button>
                                    <ul className="dropdown-menu">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </li>
                                <li><NavLink to='/create/course'>Create a course</NavLink></li>
                                <li><NavLink to='/view/all/course'>View all courses</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <Route path='/create/course' component={CreateCourse} />
                    {/* <img src={require('/home/dell/mvp-course-builder/src/data/learning.jpg')} alt="learning" /> */}

                    <footer className="footer-distributed">

                        <div className="footer-right">

                            <a href="https://www.facebook.com/udemy/"><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/udemy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter"></i></a>
                            <a href="https://in.linkedin.com/company/udemy"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.udemy.com/git-started-with-github/"><i className="fa fa-github"></i></a>

                        </div>

                        <div className="footer-left">
                            <div className="footer-links">
                                <p>About</p>
                                <p>Course builder is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an extensive library of over 80,000 courses taught by expert instructors.

                                </p>
                            </div>
                        </div>

                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default Home;
