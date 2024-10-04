const mongoose=require('mongoose');
const path=require('path');
const dotenv=require('dotenv');

dotenv.config({path:path.join(__dirname,'config','config.env')});

const db=()=>{
    mongoose.connect(process.env.DB_URL)
    .then((con)=>{
        console.log('Connected to MongoDB',con.connection.host);
    })
    .catch((err)=>{
        console.log('Failed to connect the database',err)
    })
}

module.exports=db;