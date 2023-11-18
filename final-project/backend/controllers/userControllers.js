const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/user');

exports.loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({'email': email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

exports.registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, confirmedPassword} = req.body;
    
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Invalid name or email or password!");
    }

    if (password !== confirmedPassword) {
        res.status(400);
        throw new Error('password does not match');
    }
    // console.log(name, email, password, confirmedPassword)
    //  check email unique
    const existUser = await User.findOne({'email': email});
    // console.log(existUser)
    if (existUser) {
        res.status(400)
        res.json({
            'message': 'Email Exists',
            'data': existUser
        });
        return;
    }

    const user = await User.create({name, email, password, dateCreated: Date.now()})
    
    if (user) {
        res.status(201);
        res.json({
            'message': 'OK',
            'data': user
        });
    } else {
        res.status(400);
        throw new Error('Created user failed');
    }
})

exports.updateUser = asyncHandler (async(req, res) => {
    const {name, email, originPassword, password, confirmedPassword} = req.body;
    
    if (!name || !email || !password || !originPassword || !confirmedPassword) {
        res.status(400);
        throw new Error("Invalid input! Please enter every field");
    }

    if (password !== confirmedPassword) {
        res.status(400);
        throw new Error('Password does not match');
    }

    const user = await User.findById(req.user._id)

    console.log(user)

    if(user && !(await user.matchPassword(originPassword))){
        res.status(400);
        throw new Error('Origin password is wrong!');
    }

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()
        
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generateToken(updatedUser._id)
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
})


exports.getUser = asyncHandler (async(req, res) => {
    const arg = url.parse(req.url).query;
    // const param = querystring.parse(arg);
    const user = await User.findById(req.params.id);
    if(user){
        res.status(200);
        res.json({
            'message': 'OK',
            'data': user[0]
        })
    } else{
        res.status(404);
        throw new Error('No User')
    }
})


exports.deleteUser = asyncHandler (async(req, res) => {
    const user = await User.deleteOne({"_id":req.params.id});
    
    if(user.ok !== 0){
        res.status(200);
        res.json({
            'message': 'OK',
            'data': user
        })
    } else{
        res.status(500);
        throw new Error('Delete User Failed')
    }
})