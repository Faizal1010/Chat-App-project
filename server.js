
const express = require('express')
const app = express()
const port = 3000
const path = require('path');


app.use(express.static(path.join(__dirname, 'Chat-App/dist')));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'Chat-App/dist','index.html'));
})

app.get('/:hero',(req,res)=>{
  res.send(`${req.params.hero}'s page`);
})

// app.get('/', (req, res) => {
//     const absoluteFilePath = path.join('C:', 'Users', 'User', 'Documents', 'GitHub', 'CHAT-APP', 'Chat-App', 'dist', 'index.html');
//     res.sendFile(absoluteFilePath)
// })


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})