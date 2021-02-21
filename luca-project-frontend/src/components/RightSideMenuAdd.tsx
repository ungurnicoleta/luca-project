import React, { useEffect, useState } from 'react'
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from '../API'
import NavBarMenu from "./NavBarMenu";
import AddQuestion from './AddQuestion';
import LeftSideMenu from "./LeftSideMenu";
import { Link } from 'react-router-dom';
import cancelButton from '../assets/images/CancelButton.png'
import publishButton from '../assets/images/PublishButton.png'


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

    const [formData, setFormData] = useState<IQuestion | {}>()

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
        ...formData,
        [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <div className="main-container">
            <LeftSideMenu/>
            <div className="lobby-container">
                <NavBarMenu/>
                <div className="lobby-feed">
                    <div className="lobby-feed-title">
                        <div className="lobby-feed-title-text">Haz una pregunta</div>
                        <div className="cancel-btn-wrapper">
                            <Link to="/">
                                <img className="cancel-btn" src={cancelButton} style={{marginLeft: -125}}/>
                            </Link>
                        </div>
                    </div>
                    <div className="lobby-feed-options" style={{marginTop: 25}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{display: 'flex', flexDirection: 'column', marginBottom: 35}}>
                                <label className="label-form-title" htmlFor='title'>Título de publicación</label>
                                <input 
                                    className="input-form-title"
                                    onChange={handleForm} 
                                    placeholder="Escribe tu título aquí"
                                    type='text' 
                                    id='title' />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <label className="label-form-title" htmlFor='description'>Publicación</label>
                                <textarea 
                                    className="input-form-description"
                                    placeholder="Escribe tu publicación aquí"
                                    id='description' />
                            </div>
                            <div style={{alignItems: 'flex-end', textAlign: 'right', marginTop: 30}}>
                                <Link to="/">
                                    <img className="cancel-btn" src={publishButton}/>
                                </Link>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        {/* <AddQuestion saveQuestion={handleSaveQuestion}/> */}    
        </div>
   )
}
export default RightSideMenuAdd;
