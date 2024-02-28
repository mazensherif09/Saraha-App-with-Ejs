import jwt from "jsonwebtoken";
import { messageModel } from "../../DBconection/models/message.model.js";
import { AppError } from "../utils/AppError.js";

export const auth = async (req,res,next) => {
    const token = req.header('token');  
    jwt.verify(token , process.env.JWT_KEY , (err, decoded) => {
        if(err) return next(new AppError('Unauthorized', 401));
        //401 Unauthorized
    

            req.user = decoded;

            console.log(req.user);
            
            next();
    })
}
