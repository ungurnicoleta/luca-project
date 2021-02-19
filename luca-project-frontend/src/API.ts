import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3000/api"

export const getQuestions = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const questions: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/questions"
    )
    return questions
  } catch (error) {
    throw new Error(error)
  }
}

export const addQuestion = async (
    formData: IQuestion
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const question: Omit<IQuestion, "_id"> = {
        author: formData.author,
        title: formData.title,
        description: formData.description,
        noOfComments: formData.noOfComments
      }
      const saveQuestion: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/add-question",
        question
      )
      return saveQuestion
    } catch (error) {
      throw new Error(error)
    }
  }

  export const updateQuestion = async (
    question: IQuestion
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const questionUpdate: Pick<IQuestion, "_id"> = {
        _id: question._id,
      }
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/edit-question/${question._id}`,
        questionUpdate
      )
      return updatedTodo
    } catch (error) {
      throw new Error(error)
    }
  }

  export const deleteQuestion = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedQuestion: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/delete-question/${_id}`
      )
      return deletedQuestion
    } catch (error) {
      throw new Error(error)
    }
  }