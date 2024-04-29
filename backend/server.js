import dotenv from 'dotenv'
import express from 'express'
import AuthRoute from './routes/auth.routes.js'
import MessagesRoute from './routes/messages.routes.js'
import UserRoute from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import connectToMongoDB from './db/connectToMongoDB.js'
const app = express()
const port = process.env.PORT || 3000;
dotenv.config();
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'Chat-App/dist')));
app.get('/',(req,res)=>{
  res.send("Hello World")
  // res.sendFile(path.join(__dirname, 'Chat-App/dist','index.html'));
})

app.use('/api/auth',AuthRoute)
app.use('/api/messages',MessagesRoute)
app.use('/api/user',UserRoute)
// app.get('/:hero',(req,res)=>{
//   res.send(`${req.params.hero}'s page`);
// })

// app.get('/', (req, res) => {
//     const absoluteFilePath = path.join('C:', 'Users', 'User', 'Documents', 'GitHub', 'CHAT-APP', 'Chat-App', 'dist', 'index.html');
//     res.sendFile(absoluteFilePath)
// })


app.listen(port, () => {
  connectToMongoDB();
  console.log(`App listening on port ${port}`)
})