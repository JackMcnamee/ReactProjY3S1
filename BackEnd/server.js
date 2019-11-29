const express = require('express')
const app = express()
const port = 4000 // port server uses
const path = require('path');
const bodyParser = require('body-parser'); // bodyParser for POST
const cors = require('cors');

// connects to mongoDB
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://user:user@cluster0-m26ej.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:String,
    author:String,
    summary:String, 
    genres:String,
    selectedOption:String
})

// model of bookSchema
const BookModel = mongoose.model('book', bookSchema);

// get request, URL, req(request), res(response)
app.get('/', (req, res) => res.send('My Data Rep Project'))

app.get('/whatever', (req, res) => {
    res.send('whatever')
})

app.get('/name', (req, res) => {
    // prints to terminal
    console.log(req.query.lastname)
    // response
    res.send('Welcome ' + req.query.firstname +
        ' ' + req.query.lastname);
})

app.get('/name/:title', (req, res) => {
    BookModel.findOne({title:req.params.title},
    (error,data)=>{
        res.json(data);
    }
    )
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/books', (req, res) => {

    BookModel.find((error, data) =>{
        res.json({books:data});
    })
})

app.get('/api/books/:id', (req, res)=>{
    console.log(req.params.id);

    // Object - BookModel
    BookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

// deletes book
app.delete('/api/books/:id', (req, res)=>{
    console.log(req.params.id);

    BookModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

// edit book
app.put('/api/books/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    // body passes up parameters
    BookModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            res.json(data);
        })
})

// api books
app.get('/api/books/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    BookModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})

// writes book variables to terminal
app.post('/api/books', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.author);
    console.log(req.body.summary);
    console.log(req.body.genres);
    console.log(req.body.selectedOption);

    BookModel.create({
        title:req.body.title, 
        author:req.body.author, 
        summary:req.body.summary,
        genres:req.body.genres,
        selectedOption:req.body.selectedOption
    });

    res.json('post recieved!');
})

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name)
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))