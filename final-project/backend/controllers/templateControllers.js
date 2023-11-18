const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const Template = require('../models/template');


exports.CreateTemplate = asyncHandler(async(req, res) => {
    const {name, template, templateState} = req.body;
    const userId = req.user._id;
    console.log(name, template)
    if (!name || !template) {
        res.status(400);
        throw new Error("Invalid name and template!");
    }
    
    //  check name unique
    const existName = await Template.findOne({'name': name, 'userId':req.user._id});
    console.log("helloworld")
    if (existName) {
        res.status(400);
        throw new Error("template name Exists");
    }
    console.log(userId, name, template, templateState)
    const created_template = await Template.create({userId, name, template, templateState})
    console.log("helloworld")
    if (created_template) {
        res.status(201);
        res.json({
            'message': 'OK',
            'data': created_template
        });
    } else {
        res.status(400);
        throw new Error('Created template failed');
    }
})

exports.GetTemplate = asyncHandler(async(req, res) => {

    const template = await Template.findById(req.params.id)
    if(template){
        res.json({
            userId: template.userId,
            name: template.name,
            template: template.template,
            templateState: template.templateState
        })
    }else{
        res.status(401)
        throw new Error('Invalid userId')
    }
})

exports.GetAllTemplate = asyncHandler(async(req, res) => {
    // console.log(req.user._id)
    const templates = await Template.find({'userId': req.user._id})

    res.status(200)
    res.json({
        'message': 'task find',
        'data': templates
    })

})

// exports.updateUser = asyncHandler (async(req, res) => {
//     const user = await User.findById(req.user._id)

//     if(user){
//         user.name = req.body.name || user.name;
//         user.email = req.body.email || user.email;
//         if(req.body.password){
//             user.password = req.body.password
//         }

//         const updatedUser = await user.save()
        
//         res.json({
//             _id: updatedUser._id,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//             token: generateToken(updatedUser._id)
//         })

//     }else{
//         res.status(404)
//         throw new Error('User not found')
//     }
// })

exports.deleteTemplate = asyncHandler (async(req, res) => {
    
    const template = await Template.deleteOne({'_id':req.params.id});

    if(template.ok !== 0){
        res.status(200);
        res.json({
            'message': 'OK',
            'data': template
        })
    } else{
        res.status(500);
        throw new Error('Delete template Failed')
    }
})