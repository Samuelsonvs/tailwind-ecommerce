import express from 'express';
import { isAdminAuth } from '../middlewares/utilsAuth.js';
import { adminLogin, adminAuthVerify, seed} from '../controllers/admin.js';
import getUsers from '../controllers/usersList.js';
import changeStatus from '../controllers/changeUserStatus.js';
import removeProducts from '../controllers/productRemove.js';
import { reqL } from '../controllers/requestList.js';
 

const adminRouter = express.Router();



adminRouter.get('/requestlist', isAdminAuth, reqL)
adminRouter.post('/login', adminLogin);
adminRouter.get('/verify', isAdminAuth, adminAuthVerify);
adminRouter.get('/getusers', isAdminAuth, getUsers);
adminRouter.delete('/remove', isAdminAuth, removeProducts);
adminRouter.get('/:id', isAdminAuth, changeStatus);
adminRouter.get('/seed', seed);


export default adminRouter;