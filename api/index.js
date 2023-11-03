var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

var app = Express();
app.use(cors());
app.use(Express.json());
require('dotenv').config();


var CONNECTION_STRING = process.env.MONGODB_APP_URL;

var DATABASENAME = 'jumpzoneapp';

var db;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw error;
        }
        db = client.db(DATABASENAME);
        console.log("Connected to `" + DATABASENAME + "`!");
    });
});

app.get('/api/jumpzoneapp/GetNotes', (req, res) => {
    db.collection('jumpzoneappcollection').find({}).toArray((error, result) => {
        res.send(result);
    });
});

app.post('/api/jumpzoneapp/AddNote', (req, res) => { // Quita multer().none()
    db.collection('jumpzoneappcollection').count({}, (error, count) => {
        db.collection('jumpzoneappcollection').insertOne({
            id: (count + 1).toString(),
            host: req.body.host,
            link: req.body.link,
            obs: req.body.obs,
        });
        res.json("added successfully");
    });
});