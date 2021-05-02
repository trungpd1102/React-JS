const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users = [
    { id: 1, name: 'Trung' },
    { id: 2, name: 'Ngoc' }
]

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Trung',
        age: 26,
    });
});

app.get('/users', (req, res) => {
    res.render('users/index', {
        users: users
    })
});

app.get('/users/search', (req, res) => {
    var charactors = req.query.charactors;
    var matchUsers = users.filter(user => {
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
    users.push(req.body)
    res.redirect('/users')
})

app.listen(port, function () {
    console.log('Server starting on port 3000');
})