import latest from '../models/latestModel.js'
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';


    // @route   GET api/product/latestseed
    // @desc    Get all FakeStore
    // @access  private 

const getLatestFakeData = expressAsyncHandler(async (req, res) => {

    try {

        const fakeLatest = await latest.find({});
        if(fakeLatest.length > 0){
            console.log("api/product/latestseed")
            // const resData = res;
        }else{
            // seed data from json
            const newLatestList = await allProduct.find({"options.latestList": true})

            await latest.insertMany(newLatestList);
        }

        res.status(200).send({latest: fakeLatest})
        // res.json({ fakeLatest })

    } catch (err) {
        console.log(err)
    }
})

export default getLatestFakeData;