import React from "react";
import Nav from "Nav";

class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Nav/>
                <div>{ this.props.children }</div>
            </div>
        );
    }
}

export default Main;