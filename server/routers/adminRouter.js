import express from 'express';
import { isAdminAuth } from '../middlewares/utilsAuth.js';
import { adminLogin, adminAuthVerify, seed} from '../controllers/adminController.js';


const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);
adminRouter.get('/verify', isAdminAuth, adminAuthVerify);
adminRouter.get('/seed', seed);

export default adminRouter;