import express from 'express';
import { isAuth } from '../middlewares/utilsAuth.js';
import { authVerify, login, register, registerConfirm } from '../controllers/loginRegister.js';
import { mailVerify } from './mailRoute.js';


const userRouter = express.Router();



userRouter.post('/login', login);
userRouter.post('/register', register, mailVerify);
userRouter.get('/registerconfirm/:id', registerConfirm)
userRouter.get('/verify', isAuth, authVerify);

export default userRouter;