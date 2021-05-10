import User from '../models/userModel.js';
import { userSchema, authSchema } from '../helpers/validation.js';
import { generateUToken } from '../middlewares/utilsAuth.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

/* 
    @route   GET api/auth/verify
    @desc    Verify A User's Token if valid or expired
    @access  public 
*/
export const authVerify = async (req, res) => {
    
    // This means token verify is success
    const data = {
        id: req.id,
        name: req.name ,
        email: req.email ,
        token: req.token,
    }

    res.status(200).json(data);
}

/* 
    @route   POST api/auth/register
    @desc    Register User
    @access  public 
*/
export const register = expressAsyncHandler(async (req, res) => {

    const error_msg = [];
    const params = req.body;


    const { error } = userSchema.validate(params, { abortEarly: false });

    if(error) {
        error.details.map(err => error_msg.push(err.message))
        return res.status(404).json({ errors: error_msg });
    }
    
    const emailExists = await User.findOne({ email: params.email });
    if(emailExists) {
        error_msg.push(`${params.email} is already taken`);
        return res.status(400).json({ errors: error_msg });
    }

    try {
        
        const user = new User({
            name: params.name,
            email: params.email,
            password:  bcrypt.hashSync(params.password, 8),
            status : true
        });
        await user.save();

        const data = await Promise.all(generateUToken(user));

        res.status(200).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            token: data,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: 'Server Error'});
    }
})


/* 
    @route   POST api/auth/login
    @desc    Authenticate User
    @access  public 
*/
export const login = expressAsyncHandler(async (req, res) => {
    
    const error_msg = [];
    const params = req.body;

    const { error } = authSchema.validate(params, { abortEarly: false });

    if(error){
        error.details.map(err => error_msg.push(err.message));
        return res.status(400).json({ errors: error_msg });
    }

    try {

        const user = await User.findByCredentials(params.email, params.password);

        if(user === 401){
            error_msg.push('Incorrect email or password.')
            return res.status(400).json({ errors: error_msg });
        };

        if(user.status === false) {
            error_msg.push('Your account has been banned.Pls contact to support')
            return res.status(400).json({errors: error_msg})
        };

        const data = await Promise.all(generateUToken(user));
        
        res.status(200).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            token: data,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errors: 'Server Error'});
    }  
})