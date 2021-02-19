interface IQuestion {
    _id: string
    author: string
    title: string
    description: string
    noOfComments?: number
    createdAt?: string
    updatedAt?: string
  }
  
  interface QuestionProps {
    question: IQuestion
  }
  
  type ApiDataType = {
    message: string
    status: string
    questions: ITodo[]
    question?: ITodo
  }