import { Response, Request } from "express"
import IQuestion from "../types/question.interface"
import Question from "../models/question"

const getQuestions = async (req: Request, res: Response): Promise<void> => {
  try {
    const questions: IQuestion[] = await Question.find()
    res.status(200).json({ questions })
  } catch (error) {
    throw error
  }
}

const addQuestion = async (req: Request, res: Response): Promise<void> => {
  try {

    const body = req.body as Pick<IQuestion, "author" | "title" | "description" | "noOfComments">
    console.log(body);
    const question: IQuestion = new Question({
      author: body.author,
      title: body.title,
      description: body.description,
      noOfComments: body.noOfComments
    })

    console.log(question);
    await question.save().then(()=>{
      res
      .status(200)
      .json({ message: "Question added" })
    })
    console.log(question);
    // const allQuestions: IQuestion[] = await Question.find()
  } catch (error) {
    res
      .status(400)
      .json({ message: "Problem" })
    throw error
  }
}


const updateQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateQuestion: IQuestion | null = await Question.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allQuestions: IQuestion[] = await Question.find()
    res.status(200).json({
      message: "Question updated",
      question: updateQuestion,
      questions: allQuestions,
    })
  } catch (error) {
    throw error
  }
}

const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedQuestion: IQuestion| null = await Question.findByIdAndRemove(
      req.params.id
    )
    const allQuestions: IQuestion[] = await Question.find()
    res.status(200).json({
      message: "Question deleted",
      todo: deletedQuestion,
      todos: allQuestions,
    })
  } catch (error) {
    throw error
  }
}

export { getQuestions, addQuestion, updateQuestion, deleteQuestion }
