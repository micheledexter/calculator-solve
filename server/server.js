// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// uses
app.use(express.static('server/public'));
app.use(bodyParser( bodyparser.urlencoded({extended: true})));

//globals
const PORT = 5000;

//spin up server
app.listen(PORT, function() {
    console.log('server up on port', PORT);
});