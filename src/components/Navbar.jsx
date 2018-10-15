import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark primary-color">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <nav className=" navbar is-dark ">
        //     <div className="navbar-brand">
        //         <div className="navbar-start">
        //             <Link to="/home" class="navbar-item" href="">
        //                 Home
        //             </Link>
        //             <Link to="/dashboard" class="navbar-item" href="">
        //                 Dashborad
        //             </Link>
        //         </div>
        //     </div>
        //     <div className="navbar-end">
        //         <Link to="/signin" class="navbar-item" href="">
        //             Login
        //         </Link>
        //         <Link to="/singup" class="navbar-item" href="">
        //             Sing up
        //         </Link>
        //     </div>
        // </nav>

    );
};

export default Navbar;