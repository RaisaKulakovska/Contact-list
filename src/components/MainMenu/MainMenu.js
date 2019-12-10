import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const MainMenu=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/AddContact">Add Contact</a>
                </li>
            </ul>
        </nav>
    )
};
export default MainMenu