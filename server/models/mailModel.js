import mongoose from 'mongoose';

const mailSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
    },
}, {
    timestamps: true,
});

const Mail = mongoose.model('Mail', mailSchema, "maillist");

export default Mail;