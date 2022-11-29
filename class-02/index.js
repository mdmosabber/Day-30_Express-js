const express = require('express');
require('dotenv').config();

const app = express();



app.get('/',(req, res)=> {
    res.send('<h1>This is home page</h1>')
})
app.get('/about',(req, res)=> {
    res.send('<h1>This is about page</h1>')
})

app.get('/service',(req, res)=> {
    res.send('<h1>This is service page</h1>')
})

app.get('/product', (req, res)=> {
    res.send('<h1>This is product page</h1>')
})



const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})