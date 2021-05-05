import Admin from '../models/adminModel.js';
import { adminSchema } from '../helpers/validation.js';
import { generateAToken } from '../middlewares/utilsAuth.js';
import expressAsyncHandler from 'express-async-handler';
import { specialUser } from '../fakeData.js';


export const adminAuthVerify = async (req, res) => {
    // This means token verify is success
    const data = {
        token: req.token,
    }
    res.status(200).json(data);
}


export const adminLogin = expressAsyncHandler(async (req, res) => {
    
    const error_msg = [];
    const params = req.body;

    const { error } = adminSchema.validate(params, { abortEarly: false });

    if(error){
        error.details.map(err => error_msg.push(err.message));
        return res.status(400).json({ errors: error_msg });
    }

    try {

        const admin = await Admin.findByCredentials(params.email, params.password);

        if(admin === 401){
            error_msg.push('Incorrect email or password.')
            return res.status(400).json({ errors: error_msg });
        }

        const data = await Promise.all(generateAToken(admin));
        
        res.status(200).json({
            token: data,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: 'Server Error'});
    }  
})


export const seed = expressAsyncHandler( async (req, res) => {
    await Admin.deleteMany({});
    await Admin.insertMany(specialUser);
    res.send('OK');
})