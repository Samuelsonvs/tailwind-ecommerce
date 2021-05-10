import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';


    // @route   GET api/admin/getusers
    // @desc    Get users from db
    // @access  private 

const getUsers = expressAsyncHandler(async (req, res) => {

    try {
        const users = await User.find({});
        if(users.length > 0){
            res.status(200).send({users})
        }else{
            res.status(200).send({users: 'nope'})
        }
    } catch (err) {
        console.log(err)
    }
})

export default getUsers;