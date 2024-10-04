const mongoose=require('mongoose');
const {Schema,model}=mongoose;

const EmployerSchema=new Schema({
    EmployerName:{
        type:String,
        required:true
    },
    EmployerEmail:{
        type:String,
        required:true
    },
    EmployerPassword:{
        type:String,
        required:true
    }
});

const EmployerModel=model('Employer',EmployerSchema);

module.exports=EmployerModel;