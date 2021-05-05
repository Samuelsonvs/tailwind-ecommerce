import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema({
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
        minlength: 9,
    },
}, { 
    timestamps: true 
});

adminSchema.statics.findByCredentials = async function (email, password) {

    const admin = await this.findOne({ email });
    const status = 401;

    // check admin
    if(!admin){
        await bcrypt.compare(password, process.env.FAKE_PASS);
        return status
    }

    // check password 
    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch){
        return status;
    }

    return admin;
}


const Admin = mongoose.model("Admin", adminSchema, "admindb");
export default Admin;