import React from "react";
import { IndexLink, Link } from "react-router";

class Nav extends React.Component {
    render() {
        let { firstName, lastName, photoSrc } = this.props;
        return (
            <div className="top-bar">
                <div className="row">
                    <div className="small-12 columns">
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li>
                                    <IndexLink to="/" activeClassName="link-active">Найти собак</IndexLink>
                                </li>
                                <li>
                                    <Link to="/dogs-collector" activeClassName="link-active">Удалить собак</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu">
                                <li>
                                    <img className="profile-photo" src={photoSrc}/>
                                </li>
                                <li>
                                    <a>{ firstName } { lastName }</a>
                                </li>
                                <li>
                                    <Link to="/about" activeClassName="link-active">О приложении</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;