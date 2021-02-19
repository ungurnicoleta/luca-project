import React from "react"

type Props = QuestionProps & {
  updateQuestion: (question: IQuestion) => void
  deleteQuestion: (_id: string) => void
}

const AddQuestionScreen: React.FC<Props> = ({ question, updateQuestion, deleteQuestion }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{question.title}</h1>
        <span>{question.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateQuestion(question)}
          className={"Card--button__done"}
        >
          Complete
        </button>
        <button
          onClick={() => deleteQuestion(question._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default AddQuestionScreen