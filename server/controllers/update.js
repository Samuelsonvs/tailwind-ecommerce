import expressAsyncHandler from 'express-async-handler';
import topList from '../models/topListModel.js';
import latest from '../models/latestModel.js';
import allProduct from '../models/allProductModel.js';
import hype from '../models/hypeModel.js';


    // @route   PUT api/product/:id
    // @desc    Products update
    // @access  private 

const productsUpdate = expressAsyncHandler(async (req, res) => {
    try {
        const productId = req.params.id;
        const inProduct = await allProduct.findById(productId);
        if (inProduct) {
            const inHype = await hype.findById(productId);
            const inLatest = await latest.findById(productId);
            const inTopList= await topList.findById(productId);
    
            await Promise.all([inProduct, inHype, inLatest, inTopList].map(async (state) => {
                if(state) {
                    state.city = req.body.city;
                    state.name = req.body.name;
                    state.phone = req.body.phone;
                    state.category = req.body.category;
                    state.gender = req.body.gender;
                    state.age = req.body.age;
                    state.description = req.body.description;
                    state.seller = req.body.seller;
                    state.options !== undefined && (state.options = JSON.parse(req.body.options));
                    await state.save();
                }
             
            }));
            res.status(200).send({ message: 'Product Updated' })
        } else {
            res.status(404).send({message: 'Product Not Found '});
        }

    } catch (err) {
        console.log(err)
    }
})

export default productsUpdate;