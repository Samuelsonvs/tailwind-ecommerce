import allProduct from '../models/allProductModel.js';
import reqList from '../models/requestModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/requestlistseed
    // @desc    Get requestList fakeData
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
        res.status(404).send(err)
    }
})

export default getReqListFakeData;


export const reqL = expressAsyncHandler(async (req, res) => {
    
    try {
        const requestList = await reqList.find({});
        if (requestList) {
            res.status(200).send({ requestList })
        } else {
            res.status(200).send('RequestList not have anything')
        }
    } catch (err) {
        res.status(404).send(err)
    }
})