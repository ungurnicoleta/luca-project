// import 'dotenv/config';
import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(cors())
// app.use(todoRoutes)

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)

// mongoose
//   .connect(uri, options)
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch(error => {
//     throw error
//   })

   
app.get('/', (req: any, res: any ) => {
    res.send('Hello world!');
  });
   
  
  app.listen(PORT);