import React, { useEffect, useState } from 'react'
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from './API'
import AddQuestionScreen from './screens/AddQuestionScreen';
import AddQuestion from './components/AddQuestion';

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
    <main className='App'>
      <h1>My Todos</h1>
      <AddQuestion saveQuestion={handleSaveQuestion} />
      {/* {questions.map((question: IQuestion) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))} */}
    </main>
  )
}
export default App;
