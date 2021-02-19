require('dotenv').config()
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import * as bodyParser from 'body-parser';

const app: Express = express()
import questionsRoutes from "./routes"

const PORT: number = 4000
 
app.use(bodyParser.json());

app.use(cors())
 
app.use(questionsRoutes);

const uri: string = `mongodb+srv://root:root@cluster0.jhwtg.mongodb.net/luca?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

   
app.get('/', (req: any, res: any ) => {
    res.send('Hello world!');
  });

 
  
  app.listen(PORT);