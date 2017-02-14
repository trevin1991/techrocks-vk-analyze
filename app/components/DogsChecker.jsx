import React from "react";
import vkapi from "vkapi";

import GroupCard from "GroupCard";

class DogsChecker extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: []
        };
    }

    componentDidMount() {
        let self = this;
        vkapi.getUserGroups().then((groups) => {
            self.setState({
                groups: groups
            });
        });
    }

    render() {
        let renderCards = () => {
            if(this.state.groups.length) {
                return this.state.groups.map((group) => {
                    if(group.gid)
                        return (
                            <GroupCard key={ group.gid } {...group}/>
                        )
                });
            }
        };

        return (
            <div>
                <h4>Группы, которыми вы руководите:</h4>
                { renderCards() }
            </div>
        )
    }
}

export default DogsChecker;