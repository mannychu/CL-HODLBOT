const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))


fakeApi = () => {
return [
        {
            name: 'A',
            lane: '1'
        },
        {
            name: 'B',
            lane: '2'
        },
        {
            name: 'C',
            lane: '3'
        },
        {
            name: 'D',
            lane: '4'
        },
        {
            name: 'E',
            lane: '5'
        }
];
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', test: fakeApi(), listExists: true});
});

app.listen(port, () => console.log(`App listening to port ${port}`));