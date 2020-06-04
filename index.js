const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartial(directory= __dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use(fn='/', pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://aaaa:12345@cluster0-zbgyr.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena, options={userNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida =D');
    })
    .catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
})