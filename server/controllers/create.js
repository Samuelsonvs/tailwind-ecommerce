import expressAsyncHandler from 'express-async-handler';
import reqList from '../models/requestModel.js';


const createProduct = expressAsyncHandler( async (req, res) => {
    const data = req.body;
    const product = new reqList({
        name: data.name,
        city: data.city,
        owner: data.owner,
        phone: data.phone,
        image: data.image,
        category: data.category,
        gender: data.gender,
        age: data.age,
        description: data.description,
        seller: data.seller,
        options: data.options
    })
    await product.save();
    res.status(200).send(product)
})


export default createProduct;