const express =require('express');
const connectdb =require('./config/db');
const userRoute =require('./routes/registerRoute');
const bodyparser=require('body-parser');
const app=express();
const cors = require('cors');
const port=3000;
connectdb();
app.use(cors());
app.use(bodyparser.json());

app.use('/api/v1',userRoute);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})