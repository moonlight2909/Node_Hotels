const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/person', (req, res) => {
    const data = req.body;
    // Process the data
    // Send a response

    const newPerson = new person();
    newPerson.name = data.name;
    res.status(200).send(data);
});

app.listen(3000,()=>{
    console.log("listening to port 3000")
})
