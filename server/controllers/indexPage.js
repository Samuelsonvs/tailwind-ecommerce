import expressAsyncHandler from "express-async-handler";
import topList from '../models/topListModel.js';
import latest from '../models/latestModel.js';


export const index  = expressAsyncHandler(async (req, res) => {
    
    try {
        const prodTopList = await topList.find({});
        const prodLatest = await latest.find({});
        if (prodLatest && prodTopList) {
            res.status(200).send({prodTopList, prodLatest})
        } else {
            res.status(200).send('List problem')
        }
    } catch (err) {
        res.status(404).send(err)
    }
});


export default index;

