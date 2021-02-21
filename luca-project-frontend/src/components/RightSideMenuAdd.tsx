import React, { useEffect, useState } from 'react'
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from '../API'
import NavBarMenu from "./NavBarMenu";
import AddQuestion from './AddQuestion';
import LeftSideMenu from "./LeftSideMenu";
import { Link } from 'react-router-dom';
import cancelButton from '../assets/images/CancelButton.png'

const RightSideMenuAdd: React.FC = () => {
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

    return (
        <div className="main-container">
            <LeftSideMenu/>
            <div className="lobby-container">
                <NavBarMenu/>
                <div className="lobby-feed">
        <div className="lobby-feed-title">
          <div className="lobby-feed-title-text">Haz una pregunta</div>
          <div className="lobby-feed-title-btn-wrapper">
          <Link to="/">
            <img className="cancel-btn" src={cancelButton}/>
          </Link>
            
          </div>
        </div>

      </div>
                 {/* <AddQuestion saveQuestion={handleSaveQuestion}/> */}
            </div>
        </div>)
}
export default RightSideMenuAdd;
