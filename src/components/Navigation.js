import React from "react";
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className="fixed-top ml-5">
            <ul className="nav">
                <li className="nav-item btn btn-danger mx-1">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item btn btn-danger mx-1">
                    <Link to='/about_me'>About me</Link>
                </li>
                <li className="nav-item btn btn-danger mx-1">
                    <Link to='/star_wars'>Star Wars</Link>
                </li>
                <li className="nav-item btn btn-danger mx-1">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;