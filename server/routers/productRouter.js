import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import topList from '../models/topListModel.js';
import latest from '../models/latestModel.js';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';
import { isAuth, isAdmin } from '../middlewares/utilsAuth.js';
import getTopListFakeData from '../controllers/toplistController.js';
import getLatestFakeData from '../controllers/latestController.js';
import getAllProductFakeData from '../controllers/allProductController.js';
import getHypeFakeData from '../controllers/hypeController.js';
import productsUpdate from '../controllers/updateController.js';


const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const prodTopList = await topList.find({});
    const prodLatest = await latest.find({});
    res.status(200).send({prodTopList: prodTopList, prodLatest: prodLatest})
}));

// productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
//     const product = await allProduct.findById(req.params.id);
//     if(product) {
//         res.status(200).send(product);
//     } else {
//         res.status(404).send({ message: 'Product Not Found' })
//     }
// }));

productRouter.get('/allproduct', expressAsyncHandler(async (req, res) => {
    const generalList = await allProduct.find({});
    const hypeList = await hype.find({});
    res.status(200).send({ generalList, hypeList })
}));

productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const product = await allProduct.findById(req.params.id)          
    if(product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
}));


// create router
productRouter.get('/create', expressAsyncHandler(async(req, res) => {
    const data = req.body;
    const product = new allProduct({
        name: data.name,
        city: data.city,
        owner: data.owner,
        phone: data.phone,
        image: data.image,
        category: data.category,
        gender: data.gender,
        age: data.age,
        description: data.description,
        seller: data.seller
    })
    await product.save();
}));


productRouter.put('/:id', isAuth, isAdmin, productsUpdate);

productRouter.get('/allproductseed', getAllProductFakeData);

productRouter.get('/toplistseed', getTopListFakeData);

productRouter.get('/latestseed', getLatestFakeData);

productRouter.get('/hypeseed', getHypeFakeData);

export default productRouter;