const express = require('express');  
const app = express();
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const { result } = require('lodash');
const noteRoutes = require('./routes/noteRoutes')

dotenv.config({path: "./.env"})
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const connectionUrl = "mongodb+srv://"+dbUsername+":"+dbPassword+"@cluster-test.pj5lswv.mongodb.net/?retryWrites=true&w=majority",
PORT = process.env.PORT || 3000; 

mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log('connected to a database'); app.listen(PORT, '0.0.0.0'); console.log('listening on port ' + PORT)})
.catch((err)=>{console.log(err)});

app.set('view engine', 'ejs'); 
app.use(express.static('public'));  
app.use(express.urlencoded({extended: true})); 


//Routes
app.use(noteRoutes)


