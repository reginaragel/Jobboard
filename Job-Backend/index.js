const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
const db=require('./config/config');
const cors=require('cors')
const app=express();

dotenv.config({path:path.join(__dirname,'config','config.env')});

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api',require('./routes/UserRouter'));
app.use('/api',require('./routes/EmployerRouter'));

db();




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})