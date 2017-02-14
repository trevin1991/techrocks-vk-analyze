import React from "react";

class UserInfo extends React.Component {
    render() {
        let { first_name, last_name } = this.props;
        return (
            <div>{ first_name } { last_name }</div>
        )
    }
}

export default UserInfo;