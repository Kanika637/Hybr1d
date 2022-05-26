const express=require('express')
const app=express();

const morgan=require('morgan')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Hybr1d');
// app.use('/', (req,res)=>{
//     res.send('App is running');
// });
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//register
app.use('/api/auth/register', require('./router/register'));

module.exports=app;