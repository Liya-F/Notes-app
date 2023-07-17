const express = require('express');  
const app = express();
app.use(express.static('public'));
const mongoose = express('mongoose');

const  dbURI = 'mongodb+srv://Liya:<password>@cluster0.t9ag3i7.mongodb.net/Notesdb?retryWrites=true&w=majority';

const database = (module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try{
        mongoose.connect(
            dbURI
        );
        console.log('database connected');
    }catch(err){
        console.log(err);
        console.log('database connection failed');
    }
}
)

database();

app.listen(3000); 
console.log('listening on port 3000')
app.set('view engine', 'ejs'); 


app.get('/',(req,res)=>{
    res.render('index',{title:'Home'})
})

app.get('/create', (req,res)=>{
    res.render('create',{title: 'Create'})
})