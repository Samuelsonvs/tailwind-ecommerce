import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';



    // @route   GET api/admin/:id
    // @desc    change user status
    // @access  private 

const changeStatus = expressAsyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            user.status = !user.status;
            await user.save()
            const users = await User.find({})
            res.status(200).send({users})
        } else {
            res.status(200).send({ message: 'user not here'})
        }
    } catch (err) {
        res.status(404).send(err)
    }
})

export default changeStatus;