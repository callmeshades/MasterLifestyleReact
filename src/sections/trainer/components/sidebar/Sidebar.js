import React from "react";
import {styles} from "./styles";
import Avatar from "./components/avatar";

function Sidebar(props) {
    return (
        <div style={styles.sidebar}
             className="h-screen shadow border-r pt-5">
            <Avatar fullName={props.userData.fullName} />
        </div>
    );
}
export default Sidebar;