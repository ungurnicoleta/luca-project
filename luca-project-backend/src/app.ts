import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import * as bodyParser from 'body-parser';
import http from "http";
const QuestionModel = require('./models/question');
import questionsRoutes from "./routes"

const app: Express = express()
const PORT: string | number = process.env.PORT || 4000
 
app.use(bodyParser.json());

app.use(cors())
 
app.use('/api',questionsRoutes);

const uri : string = `mongodb+srv://root:root@cluster0.jhwtg.mongodb.net/luca?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
 
      console.log(`Server running on http://localhost:${PORT}`)
    // app.listen(PORT, () =>
    //   console.log(`Server running on http://localhost:${PORT}`)
    // )
  )
  .catch(error => {
    throw error
  })

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  const Question = QuestionModel;
 
   
app.get('/', (req, res) => {
    Question.save({
      "author": "Nico",
      "title": "Test",
      "description": "Bla bla",
      "noOfComments": 10
  })
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

