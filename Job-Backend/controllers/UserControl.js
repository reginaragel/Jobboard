const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const salt=bcrypt.genSaltSync(10);
const secret='ragel2352f245';
const options={
    expiresIn:'1h'
}



const UserControl={
    signup:async(req,res)=>{
        const {userName,email,password}=req.body;
        try{
            

            const users=new User({
                userName,
                email,
                password:bcrypt.hashSync(password,salt),
            })
            await users.save();
            res.status(201).json({message:'User Registered Successfully'});
        }catch(error){
            console.error(error);
            res.status(500).json({error:'Failed to register user'})
        }

    },
    login:async(req,res)=>{

        try{
            const {email,password}=req.body;

            const users=await User.findOne({email});
            console.log(users);
            if(!users){
                return res.status(400).json({error:'User not found'});

            }
            const passok=bcrypt.compareSync(password,users.password);
            if(passok){
                const payload={
                    id:users._id,

                }
                const token=jwt.sign(payload,secret,options);

                res.cookie('token',token).json({
                    id:users._id,
                    email:users.email,
                    userName:users.userName,
                    token:token,
                })
            }else{
            res.status(400).json({error:'Invalid Password'})
            }

    }catch(err){
        console.error(err);

        console.log('Invalid credentials')


    }
    
}}
module.exports=UserControl;