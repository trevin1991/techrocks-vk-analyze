import React from "react";
import { Link } from "react-router";

class Nav extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li>
                            <Link to="/">Find Dogs</Link>
                        </li>
                        <li>
                            <Link to="/dogs-collector">Remove Dogs</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right"></div>
            </div>
        )
    }
}

export default Nav;