import React from "react";
import Nav from "Nav";
import UserInfo from "UserInfo";

import vkAPI from "vkapi";

class Main extends React.Component {
    constructor() {
        super();
    }

    getUserInfo() {
        vkAPI.login().then(function(result) {
            console.log(result);
            vkAPI.getUserInfo().then(function(userInfo) {
                console.log(userInfo);
            })
        });
    }

    render() {
        this.getUserInfo();
        return (
            <div>
                <Nav/>
                <UserInfo/>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default Main;