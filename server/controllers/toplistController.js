import topList from '../models/topListModel.js';
import expressAsyncHandler from 'express-async-handler';
import allProduct from '../models/allProductModel.js';


    // @route   GET api/product/toplistseed
    // @desc    get topList fakeData
    // @access  private 

const getTopListFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeTopList = await topList.find({});
        if(fakeTopList.length > 0){
            console.log("Seed is allready created")
            // const resData = res;
        }else{
            // seed data from json
            const newTopList = await allProduct.find({"options.topList": true})
            await topList.insertMany(newTopList);
        }
        res.status(200).send({topList: fakeTopList})

    } catch (err) {
        console.log(err)
    }
})

export default getTopListFakeData;