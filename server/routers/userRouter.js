import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken, isAuth } from '../middlewares/utilsAuth.js';
import { users } from '../fakeData.js';
import { login } from '../controllers/loginRegisterController.js';


const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const createdUser = await User.insertMany(users);
    res.send({ createdUser });
}));

userRouter.post('/login', login);

export default userRouter;