const Employer=require('../models/Employer');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')


const salt=bcrypt.genSaltSync(10);
const secret='ragel2352f245';
const options={
    expiresIn:'1h'
}



const EmployerControl={
    empsignup:async(req,res)=>{

        try{
            const {EmployerName,EmployerEmail,EmployerPassword}=req.body;

            const employers=new Employer({
                EmployerName,
                EmployerEmail,
                EmployerPassword:bcrypt.hashSync(EmployerPassword,salt),
            })
            await employers.save();
            return res.status(201).json({message:'Employer registered'})
        }catch(err){
            console.error(err);
            return res.status(500).json({message:'Error registering employer'})
        }

    },
    emplogin:async(req,res)=>{

        try{
            const {EmployerEmail,EmployerPassword}=req.body;

            const employers=await Employer.findOne({EmployerEmail});
            console.log(employers);

            if(!employers){
                return res.status(400).json({message:'Employer not found'});
            }

            const passok=bcrypt.compareSync(EmployerPassword,employers.EmployerPassword);
            if(passok){
                const payload={
                    id:employers._id,


                }
                const token=jwt.sign(payload,secret,options);

                res.cookie('token',token).json({
                    id:employers._id,
                    EmployerName:employers.EmployerName,
                    EmployerEmail:employers.EmployerEmail,
                    token:token,
                })
            }else{
                res.status(400).json({error:'Invalid Password'})
            }
            
        }catch(err){
            console.error(err);
            return res.status(500).json({message:'Error logging in employer'})
        }
        
    }

}

module.exports=EmployerControl;