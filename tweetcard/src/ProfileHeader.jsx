import React from "react";
import Icon from "./Icon";

const ProfileHeader = props => {
    function renderVerified() {
       
    }

    return (
        <div className="header">
            <img src= />
            <div>
                <h3>
                    {props.name} {renderVerified()}
                </h3>
                <div className="subtext"></div>
            </div>
        </div>
    );
};

export default ProfileHeader;
