import React from 'react'
import logo from "../assets/images/LucaLogo.png";
import homeIcon from "../assets/images/HomeIcon.png";
import YTIcon from "../assets/images/YTIcon.png";
import quizIcon from "../assets/images/QuizIcon.png";
import studyPlanIcon from "../assets/images/StudyPlan.png";
import communityIcon from "../assets/images/CommunityIcon.png";
import helpIcon from "../assets/images/HelpIcon.png";

const LeftSideMenu = () => {
    return <div className="left-side-wrapper">
        <div className="side-navbar-logo">
            <img className="side-logo" src={logo}/>
        </div>
        <div className="side-navbar-menu">
            <div className="menu-icon-wrapper">
                <img className="menu-icon" src={homeIcon}/>
                <div className="menu-text menu-text-font">Inicio</div>
            </div>
            <div className="menu-icon-wrapper">
                <img className="menu-icon" src={YTIcon}/>
                <div className="menu-text menu-text-font">Mis cursos</div>
            </div>
            <div className="menu-icon-wrapper">
                <img className="menu-icon" src={quizIcon}/>
                <div className="menu-text menu-text-font">Quizzes</div>
            </div>
            <div className="menu-icon-wrapper">
                <img className="menu-icon" src={studyPlanIcon}/>
                <div className="menu-text menu-text-font">Mi plan de estudios</div>
            </div>
            <div className="menu-icon-wrapper menu-selected">
                <img className="menu-icon" src={communityIcon}/>
                <div className="menu-text-selected menu-text-font-selected">Comunidad</div>
            </div>
            <div className="menu-icon-wrapper">
                <img className="menu-icon" src={helpIcon}/>
                <div className="menu-text menu-text-font">Centro de ayuda</div>
            </div>
        </div>
    </div>
}
export default LeftSideMenu;
