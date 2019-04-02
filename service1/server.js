const express = require('express')
const app = express()
var port = require('../config.json').port.service1;

app.get('/app1', (req, res) => res.send('Hello World From Service 1'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
