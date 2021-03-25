import mongoose from 'mongoose';

const topListSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
}, {
    timestamps: true,
});

const topList = mongoose.model('topList', topListSchema, 'toplist');

export default topList;