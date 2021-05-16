import expressAsyncHandler from "express-async-handler";
import allProduct from '../models/allProductModel.js';


export const detailP  = expressAsyncHandler(async (req, res) => {
    try {
        const product = await allProduct.findById(req.params.id) 
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send({ message: 'Product Not Found' })
        }
    } catch (err) {
        res.status(404).send(err)
    }
});


export default detailP;