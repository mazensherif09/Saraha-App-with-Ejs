import express from 'express';
import { handleRegister, registerController } from './register.controller.js';
import { checkEmail } from '../../middleware/checkEmail.js';
import { registerValidation } from './register.validation.js';
import { validation } from '../../middleware/validation.js';


const registerRouter = express.Router();

registerRouter.get('/register', registerController);
registerRouter.post('/handleRegister', validation(registerValidation), 
checkEmail, handleRegister);

export default registerRouter