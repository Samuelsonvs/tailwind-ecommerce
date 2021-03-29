import mongoose from 'mongoose';

const allProductSchema = new mongoose.Schema({
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

const allProduct = mongoose.model('allproduct', allProductSchema, "allproduct");

export default allProduct;