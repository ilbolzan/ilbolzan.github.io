const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 1080;

app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/upload', function(req, res) {
    var id = req.body.id;
    var photo = req.body.photo;

    res.send(id + ' ' + photo);
});

/*app.post('/upload', upload.single('photo'), (req, res) => {
    res.json(req.body.photo);
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});*/

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});