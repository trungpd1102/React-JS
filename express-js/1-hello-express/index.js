var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json')
var db = low(adapter)

// // Set some defaults
db.defaults({ users: [] })
  .write()

// console.log(db.get('users').value());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Trung',
        age: 26,
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
    console.log(db.get('users').value());
});

app.get('/users/search', (req, res) => {
    var charactors = req.query.charactors;
    var matchUsers = db.get('users').value().filter(user => {
        
        return user.name.indexOf(charactors) !== -1;
    });
    res.render('users/index', {
        users: matchUsers
    });
})

app.get('/users/create', (req, res) => {
    res.render('users/create');
})

app.post('/users/create', (req, res) => {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/users')
})

app.listen(port, function () {
    console.log('Server starting on port 3000');
})