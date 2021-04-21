import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import topList from '../models/topListModel.js';
import latest from '../models/latestModel.js';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';
import getTopListFakeData from '../controllers/toplistController.js';
import getLatestFakeData from '../controllers/latestController.js';
import getAllProductFakeData from '../controllers/allProductController.js';
import getHypeFakeData from '../controllers/hypeController.js';


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
    const product = await allProduct.findById(req.params.id) || 
                    await topList.findById(req.params.id) || 
                    await latest.findById(req.params.id) || 
                    await hype.findById(req.params.id);
    if(product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
}));

productRouter.get('/allproductseed', getAllProductFakeData);

productRouter.get('/toplistseed', getTopListFakeData);

productRouter.get('/latestseed', getLatestFakeData);

productRouter.get('/hypeseed', getHypeFakeData);

export default productRouter;