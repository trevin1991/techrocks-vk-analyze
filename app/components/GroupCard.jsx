import React from "react";

class GroupCard extends React.Component {
    render() {
        let { name, photo, photo_medium, admin_level, description, members_count } = this.props;
        return (
            <div className="card group-card">
                <div className="card-divider">
                    { name } - { members_count } участников
                </div>
                <div className="img-container">
                    <img src={ photo_medium }/>
                </div>
                <div className="card-section">
                    { description }
                </div>
            </div>
        )
    }
}

export default GroupCard;