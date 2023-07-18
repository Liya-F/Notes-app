const express = require('express')
const Note = require('../models/note');
const router = express.Router();

router.get('/', (req,res)=>{
    Note.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index', {title:'Home', notes:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})


router.get('/create', (req,res)=>{
    res.render('create', {title:'Create'})
})

router.post('/', (req,res)=>{
    //console.log(req.body)
    const note = new Note(req.body)

    note.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/:id', (req,res)=>{  
    const id = req.params.id;
    //console.log(id);
    Note.findById(id)
    .then((result)=>{
        res.render('details', {note : result, title : 'Read'})
    })
    .catch((err)=>{
        console.log(err);
    })
})


module.exports = router;