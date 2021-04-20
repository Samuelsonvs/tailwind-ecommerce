import Joi from 'joi';

// auth
export const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required()
});

// user
export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    confirm_password: Joi.string().allow(null).allow('')
});