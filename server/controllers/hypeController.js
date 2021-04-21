import hype from '../models/hypeModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/hypeseed
    // @desc    Get all hypedata
    // @access  private 

const getHypeFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeHype = await hype.find({});
        if(fakeHype.length > 0){
            console.log("api/product/allproductseed")
        }else{
            // seed data from json
            const data_arr = fakedata.hype;

            await hype.insertMany(data_arr);

        }
        res.status(200).send({hypelist: fakeHype})
        
        // res.json({ fakeHype })
    } catch (err) {
        console.log(err)
    }
})

export default getHypeFakeData;