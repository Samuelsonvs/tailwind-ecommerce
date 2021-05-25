import mongoose from 'mongoose';

const pendingUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    status: {
        type: Boolean,
        required: true,
    }
}, { 
    timestamps: true 
});

const pendingUser = mongoose.model("pendingUser", pendingUserSchema, "pendinguser");
export default pendingUser;