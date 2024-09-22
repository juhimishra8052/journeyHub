const user = require('../models/registration');
const { merge } = require('../routes/registerRoute');

exports.registration= async (req,res)=>{
    const {name,email,password,phone}=req.body;

    try{
        const existuser=await user.findOne({email});
        if(existuser){
            return res.status(400).json({message:"Email already exist"});
        }
           
        const newuser=new user({
            name,email,password,phone
        });
        await newuser.save();
        res.status(201).json({message:"User register successfully"});

    }
    catch(error){
        res.status(500).json({message:"error register user",error :error.message
        });
    }
}

exports.getUser=async (req,res)=>{
    try{
        const users = await user.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message:"error fetching",error:error.message});
    }
};

exports.updateuser = async (req,res)=>{
    const {id}=req.params;
    const {name,email,password,phone}=req.body;
    try{
        const update = await user.findByIdAndUpdate(id,{name,email,password,phone});

        if(!update){
            res.status(404).json({message:"user not found"});
        }

        res.status(200).json({message:"user update successfully",user:update,});
    }
    catch(error){
        res.status(500).json({message:"error update user",error:error.message,});
    }
}


exports.deleteuser = async (req,res)=>{
    const {id}=req.params;
    try {
        const delet = await user.findByIdAndDelete(id);
        if(!delet){
            res.status(404).json({message:"user not found"});

        }
        res.status(200).json({message:"user delete successfully"});

    }
    catch(error){
        res.status(500).json({message:"delet error",error:error.message});
    }
}