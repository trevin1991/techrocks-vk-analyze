import React from "react";
import Nav from "Nav";
import UserInfo from "UserInfo";

import vkapi from "vkapi";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            _loggedIn: false
        }
    }

    componentDidMount() {
        let self = this;
        vkapi.getUserInfo().then((result) => {
            self.setState({
                userInfo: {
                    firstName: result.first_name,
                    lastName: result.last_name,
                    photoSrc: result.crop_photo.photo.src_small
                }
            });
        });
    }

    render() {
        return (
            <div>
                <Nav { ...this.state.userInfo }/>
                <div className="row">
                    <div className="small-12 columns">{ this.props.children }</div>
                </div>
            </div>
        );
    }
}

export default Main;