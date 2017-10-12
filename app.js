const express = require('express');
const path = require('path');

//create an app
const app = express();

app.set('port',process.env.port || 8000);

//set a static public folder

app.set(express.static(path.join(__dirname,'public')));

//import routes

const user = require('./routes/user');


//default route

app.get('/', (req, res) => {
    res.send('Home page');
});

app.use('/user',user);

app.listen(app.get('port'), () => {
    console.log('app listening on',app.get('port'));
});