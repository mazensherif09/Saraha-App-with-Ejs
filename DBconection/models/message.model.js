import mongoose from "mongoose";

const schema = new mongoose.Schema({
    message: String,
    userId: {type: mongoose.Types.ObjectId , ref : 'user'}

}, {timestamps: true })

export const messageModel = mongoose.model('message', schema)