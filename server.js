process.on('uncaughtException',(err) => {
    console.log('error',err);
})

//third part module
import flash from 'connect-flash';
import dotenv from 'dotenv'
import session from 'express-session';
import mongoSession from 'connect-mongodb-session'
import express from 'express'

dotenv.config(); 
const app = express(); 
const port = 3000; // port number

import dbConnection from './DBconection/dbConnection.js'
//import routes
import homeRouter from './src/modules/home/home.routes.js';
import registerRouter from './src/modules/register/register.routes.js';
import loginRouter from './src/modules/login/login.routes.js';
import userRouter from './src/modules/user/user.router.js';
import messageRouter from './src/modules/message/message.router.js';
//Handle Error import
import { AppError } from './src/utils/AppError.js';
import { globalError } from './src/middleware/globalErrorMiddleware.js';

const MongoDBStore = mongoSession(session)
var store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/sarahaappEjs',
    collection: 'mySessions' //name of collection inside mongoDB
  });

//Application Use
app.use(express.static('public')) // shared folder
app.use(express.urlencoded({ extended: true })); 
app.use(session({
    secret: 'keyboard cat glekeriicsw', // secret key
    resave: false,
    saveUninitialized: false, // save document of session in mongoDB 
    store // store session in mongoDB
}))
app.use(flash())
app.use(express.json()); //convert buffer to JSON
app.use(userRouter) // user routes
app.use(messageRouter) // message routes
app.use(homeRouter) // home routes
app.use(registerRouter) // register routes
app.use(loginRouter) // login routes

//database Connection
dbConnection();

//App HandelUnHandelError
app.use('*', (req, res, next) => {
   next(new AppError("Not Found", 404)); //404 Not Found
})

//App ErrorHandeler
app.use(globalError);

process.on('unhandleRejection' , (err) => {
    console.log("error", err);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))