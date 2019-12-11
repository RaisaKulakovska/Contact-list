import React from "react";
import "./MainMenu/MainMenu.css"
import {BrowserRouter as Router, Link} from "react-router-dom";

const MainMenu=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/AddContact">Add Contact</Link>
                </li>
            </ul>
        </nav>
    )
};
export default MainMenu