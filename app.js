const express = require('express');

//create an app
const app = express();

app.set('port',process.env.port || 8000);




//default route

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(app.get('port'), () => {
    console.log('app listening on',app.get('port'));
});