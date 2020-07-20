const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Add cors to prevent cors error
app.use(cors());
//body parser middleware wil convert to json
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)

//start listening to the server
app.listen(3000);

mongoose
.connect(process.env.DB_CONNECTION,{ 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(err);
});


//MIDDLEWARES - a function that executes when routes are hit
//Example
// app.use('/posts', ()=>{
//     console.log('this is middleware running');
// })

//Connect to DB

//If we want to use MongoClient:
// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.DB_CONNECTION;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//     console.log('this is also connected')
//   client.close();
// });

//We have ability to create routes in simple way

//ROUTES - we will move these in routes folder
// app.get ('/', (req, res) =>{
//     res.send('We are on home');
// });

// app.get ('/post', (req, res) =>{
//     res.send('We are on post');
// });