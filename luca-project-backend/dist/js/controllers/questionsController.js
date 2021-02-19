"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.addQuestion = exports.getQuestions = void 0;
const question_1 = __importDefault(require("../models/question"));
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield question_1.default.find();
        res.status(200).json({ questions });
    }
    catch (error) {
        throw error;
    }
});
exports.getQuestions = getQuestions;
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log(body);
        const question = new question_1.default({
            author: body.author,
            title: body.title,
            description: body.description,
            noOfComments: body.noOfComments
        });
        console.log(question);
        yield question.save().then(() => {
            res
                .status(200)
                .json({ message: "Question added" });
        });
        console.log(question);
        // const allQuestions: IQuestion[] = await Question.find()
    }
    catch (error) {
        res
            .status(400)
            .json({ message: "Problem" });
        throw error;
    }
});
exports.addQuestion = addQuestion;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateQuestion = yield question_1.default.findByIdAndUpdate({ _id: id }, body);
        const allQuestions = yield question_1.default.find();
        res.status(200).json({
            message: "Question updated",
            question: updateQuestion,
            questions: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedQuestion = yield question_1.default.findByIdAndRemove(req.params.id);
        const allQuestions = yield question_1.default.find();
        res.status(200).json({
            message: "Question deleted",
            todo: deletedQuestion,
            todos: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteQuestion = deleteQuestion;
