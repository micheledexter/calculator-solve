// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//globals
const PORT = 5000;
let currentAnswer = 0;
let history = [];

//spin up server
app.listen(PORT, function () {
    console.log('server up on port', PORT);
});

app.get('/answer', function (req, res) {
    res.send({ answer: currentAnswer });
});

app.get('/history', function (req, res) {
    res.send({ history: history });
});

app.post('/doMath', function (req, res) {
    console.log('in doMath POST:', req, body);
    res.sendStatus(200);
});