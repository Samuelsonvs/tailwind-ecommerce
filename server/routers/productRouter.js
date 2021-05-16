import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';
import { isAdminAuth } from '../middlewares/utilsAuth.js';
import getTopListFakeData from '../controllers/topList.js';
import getLatestFakeData from '../controllers/latest.js';
import getAllProductFakeData from '../controllers/allProduct.js';
import getHypeFakeData from '../controllers/hype.js';
import productsUpdate from '../controllers/update.js';
import getReqListFakeData from '../controllers/requestList.js';
import importProduct from '../controllers/importProduct.js';
import createProduct from '../controllers/create.js';
import index from '../controllers/indexPage.js';
import productP from '../controllers/productPage.js';
import detailP from '../controllers/detailPage.js';

const productRouter = express.Router();


productRouter.get('/', index);
productRouter.get('/allproduct', productP);
// if you want to use any seed route you should take in comment this router
productRouter.get('/:id', detailP)

productRouter.post('/create', createProduct);
productRouter.post('/admincreate', isAdminAuth, importProduct );
productRouter.put('/update/:id', isAdminAuth, productsUpdate);
productRouter.get('/allproductseed', getAllProductFakeData);
productRouter.get('/toplistseed', getTopListFakeData);
productRouter.get('/latestseed', getLatestFakeData);
productRouter.get('/hypeseed', getHypeFakeData);
productRouter.get('/requestlistseed', getReqListFakeData);

export default productRouter;