import React from 'react'
import userIcon from '../assets/images/UserIcon.png'
import likeIcon from '../assets/images/LikeIcon.png'
import unlikeIcon from '../assets/images/UnlikeIcon.png'
import commIcon from '../assets/images/CommentIcon.png'
import shareIcon from '../assets/images/ShareIcon.png'
import fullStarIcon from '../assets/images/FullStarIcon.png'


const QuestionComponent = () => {
  return <div className="lobby-feed-question">
        <div className="user-profile-picture">
          <div className="user-profile-icon-wrapper">
            <img className="user-profile-icon" src={userIcon} />
          </div>
        </div>
        <div className="question-content">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column', flexGrow: 5}}>
              <div className="question-content-title">¿Cuáles son los múltiplos del 7?</div>
              <div className="question-content-desc">La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...</div>
            </div>
            <div className="comments-share-save">
              <img src={commIcon} className="comm-icon"/>
              <div className="comm-number">0</div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="question-content-likes" style={{flexGrow: 5}}>
              <div className="question-likes">
                <img className="like-icon" style={{marginRight: 15}} src={likeIcon} />
                <img className="like-icon" src={unlikeIcon} />
              </div>
              <div className="question-likes-text">
                Pregunta juan.c23 en <strong style={{fontWeight: 600, color:"#3843D0"}}>Matemáticas 6º</strong>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <img src={shareIcon} style={{marginRight: 25}} className="share-save-icon"/>
              <img src={fullStarIcon} className="share-save-icon"/>
            </div>
          </div>
        </div>
    </div>
}
export default QuestionComponent;
