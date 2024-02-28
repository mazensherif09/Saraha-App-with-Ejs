import express from 'express';
import { handleLogin, handleLogout, loginController } from './login.controller.js';

const loginRouter = express.Router();

loginRouter.get('/login', loginController);
loginRouter.post('/handleLogin', handleLogin);
loginRouter.get('/Logout', handleLogout);

export default loginRouter