import React from 'react'
import explorarButton from "../assets/images/ExplorarButton.png";
import searchIcon from "../assets/images/SearchIcon.png";
import fireIcon from "../assets/images/FireIcon.png";
import badgeIcon from "../assets/images/BadgeIcon.png";
import flowerIcon from "../assets/images/FlowerIcon.png";
import notificationIcon from "../assets/images/NotificationIcon.png";
import userIcon from "../assets/images/UserIcon.png";

const NavBarMenu = () => {
    return <div className="lobby-navbar">
            <div className="navbar-buttons-group1">
                <img className="lobby-navbar-button" src={explorarButton}/>
                <img className="lobby-navbar-icon" src={searchIcon}/>
            </div>
            <div className="navbar-buttons-group2">
                <div className="lobby-group2-row-center">
                    <img className="lobby-navbar-icon-group2" src={fireIcon}/>
                    <div className="lobby-navbar-number-group2">0</div>
                </div>
                <div className="lobby-group2-row-center">
                    <img className="lobby-navbar-icon-group2" src={badgeIcon}/>
                    <div className="lobby-navbar-number-group2">0</div>
                </div>
                <div className="lobby-group2-row-center">
                    <img className="lobby-navbar-icon-group2" src={flowerIcon}/>
                    <div className="lobby-navbar-number-group2">0</div>
                </div>
            </div>
            <div className="navbar-buttons-group3">
                <div className="lobby-group2-row-center">
                    <img className="lobby-navbar-icon-group2" src={notificationIcon}/>
                </div>
                <div className="lobby-group2-row-center">
                    <div className="lobby-navbar-icon-group3">
                        <img className="lobby-navbar-icon-user" src={userIcon}/>
                    </div>
                </div>
            </div>
        </div>
}
export default NavBarMenu;
