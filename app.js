const express = require('express');  
const app = express();

const mongoose = require('mongoose');
const { result } = require('lodash');
const noteRoutes = require('./routes/noteRoutes')

const  dbURI = 'mongodb+srv://Liya:Liya1*habte@cluster0.t9ag3i7.mongodb.net/Notesdb?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log('connected to a database'); app.listen(3000); console.log('listening on port 3000')})
.catch((err)=>{console.log(err)});

app.set('view engine', 'ejs'); 
app.use(express.static('public'));  
app.use(express.urlencoded({extended: true})); 


//Routes
app.use(noteRoutes)

app.use((req,res)=>{
res.status(404).render('404', {title:'404'}) 
})
