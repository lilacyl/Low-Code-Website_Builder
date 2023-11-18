// Load required packages
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


// Define our user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String,
    dateCreated: Date
});

UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);