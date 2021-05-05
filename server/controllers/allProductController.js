import allProduct from '../models/allProductModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/allproductseed
    // @desc    Get allproduct fakeData
    // @access  private 

const getAllProductFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeAllProduct = await allProduct.find({});
        if(fakeAllProduct.length > 0){
            console.log("Seed is allready created")
        }else{
            // seed data from json
            const data_arr = fakedata.allProduct;

            await allProduct.insertMany(data_arr);
           
        }
        res.status(200).send({productAll: fakeAllProduct})
    } catch (err) {
        console.log(err)
    }
})

export default getAllProductFakeData;