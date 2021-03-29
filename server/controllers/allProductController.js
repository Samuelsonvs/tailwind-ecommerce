import allProduct from '../models/allProductModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/lastenteredseed
    // @desc    Get all FakeStore
    // @access  private 

const getAllProductFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeAllProduct = await allProduct.find({});
        if(fakeAllProduct.length > 0){
            console.log("api/product/allproductseed")
        }else{
            // seed data from json
            await Promise.all(Object.keys(fakedata).map( async (state) => {
                await allProduct.insertMany(fakedata[state])
            }))
        }
        
        res.json({ fakeAllProduct })
    } catch (err) {
        console.log(err)
    }
})

export default getAllProductFakeData;