import { Router } from "express"
import { getQuestions, addQuestion, updateQuestion, deleteQuestion } from "../controllers/questionsController"

const router: Router = Router()

router.get("/questions", getQuestions)

router.post("/add-question", addQuestion)

router.put("/edit-question/:id", updateQuestion)

router.delete("/delete-question/:id", deleteQuestion)

export default router