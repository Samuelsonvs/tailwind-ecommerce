import expressAsyncHandler from 'express-async-handler';
import topList from '../models/topListModel.js';
import latest from '../models/latestModel.js';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';


    // @route   PUT api/product/:id
    // @desc    Products update
    // @access  private 

const importProduct = expressAsyncHandler(async (req, res) => {
    try {
        const lists = [hype, topList, latest];
        const data = req.body;
        const product = new allProduct({
            city: data.city,
            name: data.name,
            owner: data.owner,
            phone: data.phone,
            category: data.category,
            gender: data.gender,
            age: data.age,
            image: data.image,
            description: data.description,
            seller: data.seller,
            options: data.options,
        });
        let id = '';
        await product.save().then((state) => id = state._id);
        await Promise.all(Object.values(data.options).map( async (option, index) => {
            if (option === true) {
                const newp = new lists[index]({
                    _id: id,
                    city: data.city,
                    name: data.name,
                    owner: data.owner,
                    phone: data.phone,
                    category: data.category,
                    gender: data.gender,
                    age: data.age,
                    image: data.image,
                    description: data.description,
                    seller: data.seller,
                })
                await newp.save();
            }
        }));
        
        res.status(200).send({ message: 'Product imported' })
    } catch (err) {
        res.status(404).send(err)
    }
})

export default importProduct;