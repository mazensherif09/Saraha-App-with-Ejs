import { AppError } from "../utils/AppError.js";


export const validation = (schema) => {
return(req, res, next) => {
    const { error } = schema.validate({...req.body,...req.parans,...req.query} , {abortEarly: false});
    if (!error) {
       next()
    }else{
      req.error =  error.details 
      next()
    }
  }
}
