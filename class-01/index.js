const express = require('express');
require('dotenv').config();
const app = express();


app.get('/', (req, res)=> {
    res.send('Hello Express JS')
})

const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})
