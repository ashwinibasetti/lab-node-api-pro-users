const express = require('express')
const app = express()
app.use(express.json())
const url = 'mongodb+srv://Ashwini:firstdb@cluster0.pmann.mongodb.net/Prousers?retryWrites=true&w=majority';
const mongoose = require('mongoose')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
const data = require('./db.js')


// get method 
app.get('/', async (req,res)=>{
    const list = await data.find()
    .then(result=>{
        res.send({
            result,
            message:"found them"
        })
    }).catch(err=>{
        res.status(500).send({
            error: err,
            errorMessage: "The users information could not be retrieved."
        })
    })
})
// get method with id
app.get('/users/:_id', async (req,res)=>{
    const list = await data.find(req.params)
    .then(result=>{
        res.send({
            result,
            message:"found it"
        })
    }).catch(err=>{
        res.status(404).send({
            error:err,
            message: "The user with the specified ID does not exist." 
        })
    })
})

// delete method
app.delete('/', async (req,res)=>{
    const list = await data.deleteOne(req.body)
    res.status(200).send({
        list,
        message:"user deleted"
    })
})

// delete method with id 
app.delete('/users/:_id', async (req,res)=>{
    const list = await data.deleteOne(req.params)
    .then(result=>{
        res.status(200).send({
            result,
            message:"user deleted"
        })
    }).catch(err=>{
        res.status(404).send({
            error: err,
            message: "The user with the specified ID does not exist."
        })
    })
})

//put method
app.put('/',async (req,res)=>{
    const list = await data.updateOne({name:"Srushti"},req.body)
    res.send({
        list,
        message:"user updated"
    })
})

//post method
app.post('/', async (req,res)=>{
    const list = await new data({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        prograd_id:req.body.prograd_id,
        squad:req.body.squad
    }).save().then(result=>{
        res.status(201).send({
            message:"Added",
            created:result
        })
    }).catch(err=>{
        res.status(400).send({
            errorMessage: "Please provide name and bio for the user.",
            error: err
        })
    })
})
//put methos using id
app.put('/users/:_id',async (req,res)=>{
    const list = await data.updateOne(req.params,req.body)
    .then(result=>{
        res.status(200).send({
            result,
            message:"user updated"
        })
    }).catch(err=>{
        res.status(404).send({
            error:err,
            message: "The user with the specified ID does not exist."
        }) 
    })
})

.listen(3008,()=>console.log('server started at 3008'))