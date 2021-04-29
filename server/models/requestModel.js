import mongoose from 'mongoose';

const reqListSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
    },
    city: {
        type: String,
        required: true,
    },
    // owner: {
    //     type: String,
    //     required: true,
    // },
    // phone: {
    //     type: String,
    //     required: true,
    // },
    image: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    seller: {
        type: String,
        required: true
    },
    options: {
        type: {String},
        required: true
    }
}, {
    timestamps: true,
});

const reqList = mongoose.model('reqList', reqListSchema, "requestList");

export default reqList;