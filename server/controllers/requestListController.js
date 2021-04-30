import allProduct from '../models/allProductModel.js';
import reqList from '../models/requestModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/requestlistseed
    // @desc    Get all requestlist
    // @access  private 

const getReqListFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeAllReqList = await reqList.find({});
        if(fakeAllReqList.length > 0){
            console.log("Seed is allready created")
        }else{
            // seed data from json
            const data_arr = fakedata.fakeReqData;

            await reqList.insertMany(data_arr);
        }
        res.status(200).send({reqList: fakeAllReqList})
        
    } catch (err) {
        console.log(err)
    }
})

export default getReqListFakeData;