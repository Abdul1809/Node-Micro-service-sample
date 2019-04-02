const express = require('express')
const app = express()
const config = require('../config.json');
var port = config.port.service2;

app.get('/app2', (req, res) => res.send('Hello World Service 2'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
