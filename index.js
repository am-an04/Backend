require('dotenv').config()
const express =require ('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/twitter',(req,res)=>{
    res.send('amandotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at my account </h1>')
})

app.get('/Youtube',(req,res)=>{
    res.send('<h2> tarak mehta ka ooltah chasma </h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`example app reunning on port ${port}`)
})