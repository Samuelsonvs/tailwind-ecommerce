import latest from '../models/latestModel.js'
import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';


    // @route   GET api/product/latestseed
    // @desc    Get latest fakeData
    // @access  private 

const getLatestFakeData = expressAsyncHandler(async (req, res) => {

    try {

        const fakeLatest = await latest.find({});
        if(fakeLatest.length > 0){
            console.log("Seed is allready created")
        }else{
            // seed data from json
            const newLatestList = await allProduct.find({"options.latestList": true})

            await latest.insertMany(newLatestList);
        }

        res.status(200).send({latest: fakeLatest})
    } catch (err) {
        console.log(err)
    }
})

export default getLatestFakeData;