const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
    try{
        if(req.body.email=="" || req.body.password==""){
            return res.status(500).json({
                success:false,
                error:'Email is required!'
            });
        }

        const user = await User.findOne({email:req.body.email});
       
        if(!user){
            return res.status(400).json({
                success:false,
                error:'User does not exist'
            })
        }

        let matched = await bcrypt.compare(req.body.password, user.password);

        if(matched === true){
            const expiresIn = '24h';
            const token = jwt.sign({id: user._id }, process.env.TOKEN_KEY, {expiresIn: expiresIn});
            jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded) {
                if(err){
                    res.status(401).json({
                        success:false,
                        message:err.message
                    });
                }else{
                    req.user = user;
                    res.cookie('auth', token, {
                        maxAge: 1000 * 60 * 60 * 24,
                        expires: 1000 * 60 * 60 * 24,
                        // Domain:'http://goalta.ai',
                        Domain:'http://localhost:3000',
                        path:'/',
                        secure: true,
                        httpOnly: false,
                        SameSite: 'none'
                    })
                   
                    res.status(200).json({
                        success:true,
                        token:token,
                        role:user.role,
                        authuser:req.user,
                        message:'Login successfully!'
                    });
                }
            });
        }else{
            return res.status(400).json({
                success:false,
                error:'Invalid login details!'
            })
        }
        return res.status(200).json({
            success:true,
            error:user
        })
    }catch(err){
        console.log(`Login:${err}`);
        next(err);
    }
}

exports.register = async (req, res, next)=>{
    try{
        if(req.body.password !== req.body.confirm_password){
            return res.status(200).json({
                success:false,
                error:'Password does not match!'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashed;
        
        const user = await User.create(req.body);
        return res.status(200).json({
            success:true,
            data:user,
            message:`${req.body.name} you registered successfully!`
        })
    }catch(err){
        console.log(`register:${err}`);
        next(err);
    }
}

exports.addUser = async (req, res, next)=>{
    try{
        if(req.body.password !== req.body.confirm_password){
            return res.status(200).json({
                success:false,
                error:'Password does not match!'
            })
        }

        if(req.body.password != ""){
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashed;
        }

        const user = await User.create(req.body);
        return res.status(200).json({
            success:true,
            data:user,
            authuser:req.user,
            message:`User registered successfully!`
        });

    }catch(err){
        console.log(`add user:${err}`);
        next(err);
    }
}

exports.userList = async(req, res, next)=>{
    try{
        const user = await User.find().select(['-password']);
        if(user.length==0){
            return res.status(500).json({
                success:false,
                error:'No record found!'
            })
        }
       
        return res.status(200).json({
            success:true,
            data:user,
            authuser:req.user,
            total:user.length
        })
    }catch(err){
        next(err)
    }
}

exports.editUser = async (req, res, next)=>{
    try{
        const user = await User.findById(req.params.id).select(['-password']);
        if(user.length==0){
            return res.status(500).json({
                success:false,
                error:'No record found!'
            })
        }
       
        return res.status(200).json({
            success:true,
            data:user,
            total:user.length
        })
    }catch(err){
        next(err);
    }
}

exports.updateUser = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
            if (!data) {
                return res.status(500).json({
                    success:false,
                    error:'No record found!'
                })
            }
            return res.status(200).json({
                success:true,
                message: "User updated successfully!",
            })
        });
    }catch(err){
        next(err);
    }
}

exports.deleteUser = async (req, res, next)=>{
    try{
        await User.findByIdAndRemove(req.params.id).then(user => {
           
            if(!user){
                return res.status(500).json({
                    success:false,
                    error:'No record found!'
                })
            } 
            return res.status(200).json({
                success:true,
                message: "User deleted successfully!",
            })

        })
    }catch(err){
        next(err);
    }
}