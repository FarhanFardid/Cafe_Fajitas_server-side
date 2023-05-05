const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chefs = require('./chefs.json')

const cors = require('cors');

app.use(cors());
app.get('/', (req,res)=>{
    res.send("The chef-recipe server is running ")
})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})

app.get('/chefs/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(chefs);
    }
    else{
        const selectedChef = chefs.find(chef=> parseInt(chef.id) === id)
        res.send(selectedChef);
    }
})

app.listen(port, () =>{
    console.log("The chef server is running on port :", port )
})