import mongoose from 'mongoose';

const lastEnteredSchema = new mongoose.Schema({
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

const lastEntered = mongoose.model('lastentered', lastEnteredSchema, "lastentered");

export default lastEntered;