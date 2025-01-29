const User = require("../models/user-model")
const bcrypt = require("bcrypt");

const home = async (req,res) => {
    try{
        res.status(200).send("Welcome using router")
    }
    catch(error){
        console.log(error);
    }
}


const register = async (req,res) =>{
    try{
        console.log(req.body);
        
        const {username,email,phone,password} = req.body;
        const userExist = await User.findOne({ email:email});
        if(userExist){
            return res.status(400).json({msg : "email already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(password,salt);

        const userCreated = await User.create({username,email,phone,password : hash_password});

        res.status(200).json({message : userCreated, 
            token : await userCreated.generateToken(),
        userId : userCreated._id.toString()});
    }
    catch(error){
        res.status(400).json({msg:"page not found",error:`${error}`});
    }
}
module.exports={home,register};