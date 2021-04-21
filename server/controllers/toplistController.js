import topList from '../models/topListModel.js';
import fakedata from '../fakeData.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/product/toplistseed
    // @desc    get all fake toplist data
    // @access  private 

const getTopListFakeData = expressAsyncHandler(async (req, res) => {

    try {
        const fakeTopList = await topList.find({});
        if(fakeTopList.length > 0){
            console.log("api/product/toplistseed")
            // const resData = res;
        }else{
            // seed data from json
            const data_arr = fakedata.topList //.map(api => {
            //     api['search'] = api.category.toLowerCase();
            //     return api
            // });

            await topList.insertMany(data_arr);
        }
        res.status(200).send({topList: fakeTopList})
        // res.json({ fakeTopList })

    } catch (err) {
        console.log(err)
    }
})

export default getTopListFakeData;