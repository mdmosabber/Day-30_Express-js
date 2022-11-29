const express = require('express');
require('dotenv').config();
const app = express();

// Status response
app.get('/status', (req, res)=> {
    res.status(201).end('Created..,')
})


// JSON Response
app.get('/json',(req, res)=> {
    
    const myJson = [
        {
            name: 'Md. Mosabber',
            email: 'mosabber@gmail.com',
            profession: 'Developer'
        },
        {
            name: 'Rahim',
            email: 'rahim@gmail.com',
            profession: 'Programmer'
        }
    ]


    res.json(myJson);
})



const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`Server Run Successfully at http://localhost:${port}`)
})
