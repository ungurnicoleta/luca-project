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
import ListComponent from "./components/ListComponent";
import LeftSideMenu from "./components/LeftSideMenu";
import RightSideMenuList from "./components/RightSideMenuList";


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

        <LeftSideMenu/>
        <RightSideMenuList/>
      </div>
  );
}
export default App;
