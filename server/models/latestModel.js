import mongoose from 'mongoose';

const latestSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
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

const latest = mongoose.model('lastentered', latestSchema, "lastentered");

export default latest;