const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index', { name: 'André' });
});

app.listen(80, () => {
    console.log('Express online na porta 80');
});

let obj = {};
delete obj;