const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 1080;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//app.use(express.bodyParser()); // Automatically parses form dat
app.use(bodyParser.json()); // support json encoded bodies


app.post('/upload',  (req, res) => {
    res.json(req.body.photo);
    /*if(req.file) {
        res.json(req.file);
    }
    else throw 'error';*/
});
//
app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});