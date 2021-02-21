import React, { useEffect, useState } from 'react'
import userIcon from '../assets/images/UserIcon.png'
import lobbyTitleButton from '../assets/images/LobbyTitleButton.png'
import rectangleSelected from '../assets/images/RectangleIcon.png'
import likeIcon from '../assets/images/LikeIcon.png'
import unlikeIcon from '../assets/images/UnlikeIcon.png'
import commIcon from '../assets/images/CommentIcon.png'
import shareIcon from '../assets/images/ShareIcon.png'
import fullStarIcon from '../assets/images/FullStarIcon.png'
import QuestionComponent from "./QuestionComponent";


const ListComponent = () => {
  return (
      <div className="lobby-feed">
        <div className="lobby-feed-title">
          <div className="lobby-feed-title-text">Comunidad Luca</div>
          <div className="lobby-feed-title-btn-wrapper">
            <img className="lobby-feed-title-btn" src={lobbyTitleButton} />
          </div>
        </div>
        <div className="lobby-feed-options">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="lobby-feed-option" style={{color: "#3843D0", marginBottom: 7 }}>POPULARES</div>
            <img style={{width: 113, height: 2}} src={rectangleSelected} />
          </div>
          <div className="lobby-feed-option" style={{color: "#9A9CB5"}}>NUEVOS</div>
          <div className="lobby-feed-option" style={{color: "#9A9CB5"}}>SEGUIDOS</div>
        </div>

        <div className="lobby-feed-questions-list">
          <QuestionComponent/>
          <hr/>
          <QuestionComponent/>
        </div>
      </div>
  )
}
export default ListComponent;
