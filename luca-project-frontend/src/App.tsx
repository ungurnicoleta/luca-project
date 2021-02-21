import React from 'react'
import "./App.css";
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddQuestionScreen from './components/AddQuestionScreen';

const App: React.FC = () => {
  // const [questions, setQuestions] = useState<IQuestion[]>([])

  // useEffect(() => {
  //   fetchTodos()
  // }, [])

  // const fetchTodos = (): void => {
  //   getQuestions()
  //   .then(({ data: { questions } }: IQuestion[] | any) => setQuestions(questions))
  //   .catch((err: Error) => console.log(err))
  // }


  // const handleUpdateQuestion = (todo: IQuestion): void => {
  //   updateQuestion(todo)
  //     .then(({ status, data }) => {
  //       if (status !== 200) {
  //         throw new Error("Error! Todo not updated")
  //       }
  //       setQuestions(data.questions)
  //     })
  //     .catch(err => console.log(err))
  // }

  // const handleDeleteQuestion = (_id: string): void => {
  //   deleteQuestion(_id)
  //     .then(({ status, data }) => {
  //       if (status !== 200) {
  //         throw new Error("Error! Question not deleted")
  //       }
  //       setQuestions(data.questions)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" children={HomeScreen} />
              <Route path="/add" children={AddQuestionScreen} />
            </Switch>
        </Router>
      </div>
  );
}
export default App;
