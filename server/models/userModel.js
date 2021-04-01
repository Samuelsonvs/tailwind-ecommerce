import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const userSchema = new mongoose.Schema({
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
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, { 
    timestamps: true 
});

userSchema.statics.findByCredentials = async function (email, password) {

    const user = await this.findOne({ email });
    const status = 401;

    // check user
    if(!user){
        await bcrypt.compare(password, process.env.FAKE_PASS);
        return status
    }

    // check password 
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return status;
    }

    return user;
}


const User = mongoose.model("User", userSchema, "userz");
export default User;