import mongoose from "mongoose";
 

export default function dbConnection() {
    mongoose.connect('mongodb://127.0.0.1:27017/sarahaappEjs').then(() => {
        console.log("database connected");
    }).catch(err => {
        console.log("database error", err);
    })
}