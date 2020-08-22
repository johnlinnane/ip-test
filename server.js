const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());



const port = 6001;

app.listen(port, () => {
    console.log(`SERVER RUNNING : port ${port}`)
})