import express from 'express';
import { isAdminAuth } from '../middlewares/utilsAuth.js';
import { adminLogin, adminAuthVerify, seed} from '../controllers/admin.js';
import getUsers from '../controllers/usersList.js';
import changeStatus from '../controllers/changeUserStatus.js';


const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);
adminRouter.get('/verify', isAdminAuth, adminAuthVerify);
adminRouter.get('/getusers', isAdminAuth, getUsers);
adminRouter.get('/:id', isAdminAuth, changeStatus);
adminRouter.get('/seed', seed);
export default adminRouter;