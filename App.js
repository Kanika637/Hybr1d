const express=require('express')
const app=express();

const morgan=require('morgan')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Hybr1d',{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.Promise=global.Promise;
// app.use('/', (req,res)=>{
//     res.send('App is running');
// });
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//all the routes
//register
app.use('/api/auth/register', require('./router/register'));
//login
app.use('/api/auth/login', require('./router/login'));
//getting sellers list
app.use('/api/auth/list-of-sellers', require('./router/SellerList'));
// creating a catalog
app.use('/api/seller/create-catalog', require('./router/catalog'));
//getting catalogs from ID
app.use('/api/buyer/seller-catalog/', require('./router/catalogfromID'));
//sending list of items to seller
app.use('/api/buyer/create-order/', require('./router/ListOfItems'));


module.exports=app;