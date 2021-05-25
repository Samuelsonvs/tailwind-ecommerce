import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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