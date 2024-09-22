const mongoose = require('mongoose');

const connectdb= async()=>{
    try{
      await  mongoose.connect('mongodb://127.0.0.1:27017/JourneyHub');
        console.log('connect db');
    }
    catch(err){
            console.log('connection feild',err.message);
    }
} 

module.exports= connectdb;