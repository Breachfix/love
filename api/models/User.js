const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{type: String, required:true, unique:true},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    profilePic:{type:String, defaut:""},
    isAdmin:{type:Boolean, default: false},
    // billingID: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true
    // },
    // plan: {
    //     type: String,
    //     enum: ['None', 'Basic', 'Pro'],
    //     default: 'None'
    // },
    // endDate: {
    //     type: Date,
    //     default: () => Date.now ()+ 7*24*60*60*1000
    // }

},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);