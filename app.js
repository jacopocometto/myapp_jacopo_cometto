import express from 'express';
const app = express();

import mongoose from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));


//IMPORT ROUTES

import postRouter from './routes/posts.js'
app.use('/posts', postRouter);

//ROUTES
app.get('/', (req,res) =>{
    res.send("<h1>Benvenuto in myapp</h1>");
});

//CONNECT DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log ('connected to DB!');
})

//START LISTENING TO THE SERVER
app.listen(5000);