/*
Tod{
title:sting,
description:string,
completed:boolean

}*/
const mongoose = require("mongoose")
const { string } = require("zod")
const { toDotPath } = require("zod/v4/core")
mongoose.connect("mongodb+srv://mt0988145_db_user:chalbhag@cluster0.f8znkl1.mongodb.net/todos").then(()=>console.log("mongoose connected successfully ")).catch(()=>console.log("Error while connecting to database"))
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false,
    }
})
const todo = mongoose.model('todos',todoSchema)
module.exports={todo}
// mongoose.connect('mongodb+srv://mt0988145_db_user:chalbhag@cluster0.f8znkl1.mongodb.net/userappnew').then(() => console.log("mongoose connected Suceefully")).catch(() => console.log("Error while connecting to Server"))
