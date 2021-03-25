import lastEntered from '../models/lastEnteredModel.js'
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/lastenteredseed
    // @desc    Get all FakeStore
    // @access  private 

const getLastEnteredFakeData = expressAsyncHandler(async (req, res) => {

    try {

        const fakeLastEntered = await lastEntered.find({});
        if(fakeLastEntered.length > 0){
            console.log("api/product/lastenteredseed")
            // const resData = res;
        }else{
            // seed data from json
            const data_arr = fakedata.lastEntered

            await lastEntered.insertMany(data_arr);
        }

        // res.json({ fakeLastEntered })

    } catch (err) {
        console.log(err)
    }
})

export default getLastEnteredFakeData;