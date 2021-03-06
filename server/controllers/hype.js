import hype from '../models/hypeModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';


    // @route   GET api/product/hypeseed
    // @desc    Get hyplist fakeData
    // @access  private 

const getHypeFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeHype = await hype.find({});
        if(fakeHype.length > 0){
            console.log("Seed is allready created")
        }else{
            // seed data from json
            const newHypeList = await allProduct.find({"options.hypeList": true})

            await hype.insertMany(newHypeList);

        }
        res.status(200).send({hypelist: fakeHype})
        
    } catch (err) {
        console.log(err)
    }
})

export default getHypeFakeData;