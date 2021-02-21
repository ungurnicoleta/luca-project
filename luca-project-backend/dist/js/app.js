"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
const QuestionModel = require('./models/question');
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors_1.default());
app.use('/api', routes_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jhwtg.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => console.log(`Server running on http://localhost:${PORT}`)
// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// )
)
    .catch(error => {
    throw error;
});
mongoose_1.default.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});
const Question = QuestionModel;
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(PORT);
// const server = http.createServer(app);
// server.listen(PORT, function () {
//   console.log("Express server listening on *:" + PORT);
// });
// server.on('listening',function(){
//   console.log('ok, server is running');
// });
//  process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
//  process.once('SIGUSR2', function () { process.kill(process.pid, 'SIGUSR2'); });
