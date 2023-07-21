const express = require('express');  
const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const { result } = require('lodash');
const noteRoutes = require('./routes/noteRoutes')

dotenv.config({path: "./.env"})
const connectionUrl = process.env.CONNECTION_URL;
PORT = process.env.PORT; 

mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log('connected to a database'); app.listen(PORT); console.log('listening on port 3000')})
.catch((err)=>{console.log(err)});

app.set('view engine', 'ejs'); 
app.use(express.static('public'));  
app.use(express.urlencoded({extended: true})); 


//Routes
app.use(noteRoutes)


