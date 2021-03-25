import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';

dotenv.config();


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ptiel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


app.use('/api/product', productRouter);


app.use((err, req, res, next) => {
    res.status(500).send(({ message: err.message }));
});

app.listen(PORT, () => {
    console.log('Open at http://localhost:5000')
});


