import React from 'react'
import ListComponent from "./ListComponent";
import NavBarMenu from "./NavBarMenu";


const RightSideMenuList = () => {
    return <div className="lobby-container">
        <NavBarMenu/>
        <ListComponent/>
    </div>
}
export default RightSideMenuList;
