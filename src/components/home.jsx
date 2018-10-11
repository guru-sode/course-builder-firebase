import React, { Component } from 'react';
import '../styles/home.css';

class Home extends Component {
    state = {  }
    render() { 
        return (
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
      <li><a href="#">Create a course</a></li>
      <li><a href="#">View all courses</a></li>
    </ul>
  </div>
</nav>
<img src={require('/home/dell/mvp-course-builder/src/data/learning.jpg')} alt="learning"/>

<footer className="footer-distributed">

    <div className="footer-right">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

    </div>

    <div className="footer-left">
    <p className="footer-links">
    <a className="link-1" href="#">About</a>
    <p>Random text</p>
    </p>
    </div>

</footer>
</div>
          );
    }
}
 
export default Home;