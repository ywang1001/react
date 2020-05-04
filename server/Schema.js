const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        _id: Schema.ObjectId,   //reason : used ObjectId for Intergrity
        avatarpath: String,
        name:  String,
        sex:  String,
        rank: String,
        StartDate: String,
        Phone: String,
        Email: String,
        Superior: {name: String, _id: {type: Schema.ObjectId}},
        child:  [{type: Schema.ObjectId}]
    
    }
);
let User = mongoose.model("armylist",userSchema,"armylist");
module.exports = User;


