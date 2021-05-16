import expressAsyncHandler from "express-async-handler";
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';


export const productP  = expressAsyncHandler(async (req, res) => {
    try {
        const allProductList = await allProduct.find({});
        const hypeList = await hype.find({});
        if (allProductList && hypeList) {
            res.status(200).send({ allProductList, hypeList })
        } else {
            res.status(200).send('List problem')
        }
    } catch (err) {
        res.status(404).send(err)
    }
});


export default productP;