const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

require('dotenv').config()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())


app.get('/',(req, res)=>{
    res.json({
        status: true,
        message :"AI Support Ticket System API is Running"
    })
})


app.get('/api/health',(req, res)=>{
    res.json({
        status: true,
        message :"API is healthy"
    })
})

const mongoose = require('mongoose');

// Replace with your MongoDB Compass connection string
const mongoURI = 'mongodb://localhost:27017/ticket-traker';

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Successfully connected to MongoDB via Compass!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log("Server is running ", PORT)
})