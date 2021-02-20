import React, { useEffect, useState } from 'react'
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from './API'
import AddQuestionScreen from './screens/AddQuestionScreen';
import AddQuestion from './components/AddQuestion';
import CommunityHome from './screens/CommunityHome';
import "./App.css";
import logo from './assets/images/LucaLogo.png'
import homeIcon from './assets/images/HomeIcon.png'
import YTIcon from './assets/images/YTIcon.png'
import quizIcon from './assets/images/QuizIcon.png'
import studyPlanIcon from './assets/images/StudyPlan.png'
import communityIcon from './assets/images/CommunityIcon.png'
import helpIcon from './assets/images/HelpIcon.png'
import explorarButton from './assets/images/ExplorarButton.png'
import searchIcon from './assets/images/SearchIcon.png'
import fireIcon from './assets/images/FireIcon.png'
import badgeIcon from './assets/images/BadgeIcon.png'
import flowerIcon from './assets/images/FlowerIcon.png'
import notificationIcon from './assets/images/NotificationIcon.png'
import userIcon from './assets/images/UserIcon.png'
import lobbyTitleButton from './assets/images/LobbyTitleButton.png'
import rectangleSelected from './assets/images/RectangleIcon.png'


const App: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getQuestions()
    .then(({ data: { questions } }: IQuestion[] | any) => setQuestions(questions))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveQuestion = (e: React.FormEvent, formData: IQuestion): void => {
    e.preventDefault()
    addQuestion(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Question not saved")
        }
        setQuestions(data.questions)
      })
      .catch(err => console.log(err))
  }

  const handleUpdateQuestion = (todo: IQuestion): void => {
    updateQuestion(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated")
        }
        setQuestions(data.questions)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteQuestion = (_id: string): void => {
    deleteQuestion(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Question not deleted")
        }
        setQuestions(data.questions)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="main-container">
      {/* <h1>My Todos</h1> */}
      {/* <AddQuestion saveQuestion={handleSaveQuestion} /> */}
      {/* {questions.map((question: IQuestion) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))} */}

      <div className="left-side-wrapper">
        <div className="side-navbar-logo">
            <img className="side-logo" src={logo} />
        </div>
        <div className="side-navbar-menu">
          <div className="menu-icon-wrapper">
            <img className="menu-icon" src={homeIcon} />
            <div className="menu-text menu-text-font">Inicio</div>
          </div>
          <div className="menu-icon-wrapper">
            <img className="menu-icon" src={YTIcon} />
            <div className="menu-text menu-text-font">Mis cursos</div>
          </div>
          <div className="menu-icon-wrapper">
            <img className="menu-icon" src={quizIcon} />
            <div className="menu-text menu-text-font">Quizzes</div>
          </div>
          <div className="menu-icon-wrapper">
            <img className="menu-icon" src={studyPlanIcon} />
            <div className="menu-text menu-text-font">Mi plan de estudios</div>
          </div>
          <div className="menu-icon-wrapper menu-selected">
            <img className="menu-icon" src={communityIcon} />
            <div className="menu-text-selected menu-text-font-selected">Comunidad</div>
          </div>
          <div className="menu-icon-wrapper">
            <img className="menu-icon" src={helpIcon} />
            <div className="menu-text menu-text-font">Centro de ayuda</div>
          </div>
        </div>
      </div>
      <div className="lobby-container">
        <div className="lobby-navbar">
              <div className="navbar-buttons-group1">
                <img className="lobby-navbar-button" src={explorarButton} />
                <img className="lobby-navbar-icon" src={searchIcon} />
              </div>
              <div className="navbar-buttons-group2">
                <div className="lobby-group2-row-center">
                  <img className="lobby-navbar-icon-group2" src={fireIcon} />
                  <div className="lobby-navbar-number-group2">0</div>
                </div>
                <div className="lobby-group2-row-center">
                  <img className="lobby-navbar-icon-group2" src={badgeIcon} />
                  <div className="lobby-navbar-number-group2">0</div>
                </div>
                <div className="lobby-group2-row-center">
                  <img className="lobby-navbar-icon-group2" src={flowerIcon} />
                  <div className="lobby-navbar-number-group2">0</div>
                </div>
              </div>
              <div className="navbar-buttons-group3">
                <div className="lobby-group2-row-center">
                  <img className="lobby-navbar-icon-group2" src={notificationIcon} />
                </div>
                <div className="lobby-group2-row-center">
                  <div className="lobby-navbar-icon-group3">
                    <img className="lobby-navbar-icon-user" src={userIcon} />
                  </div>
                </div>
              </div>
          </div>
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
          </div>
        </div>
    </div>
  )
}
export default App;
