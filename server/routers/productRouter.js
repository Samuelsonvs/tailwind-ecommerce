import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import topList from '../models/topListModel.js';
import lastEntered from '../models/lastEnteredModel.js';
import getTopListFakeData from '../controllers/toplistController.js';
import getLastEnteredFakeData from '../controllers/lastEnteredController.js';


const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async(req, res) => {
    const prodTopList = await topList.find({});
    const prodLastEntered = await lastEntered.find({});
    res.status(200).send({prodTopList: prodTopList, prodLastEntered: prodLastEntered})
}));


productRouter.get('/toplistseed', getTopListFakeData);

productRouter.get('/lastenteredseed', getLastEnteredFakeData);

export default productRouter;