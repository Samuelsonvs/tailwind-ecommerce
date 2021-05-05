import express from 'express';
import { isAuth } from '../middlewares/utilsAuth.js';
import { authVerify, login, register } from '../controllers/loginRegisterController.js';


const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.get('/verify', isAuth, authVerify);

export default userRouter;