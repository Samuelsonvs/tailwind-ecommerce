import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import adminRouter from './routers/adminRouter.js';
import mailRouter from './routers/mailRoute.js';

dotenv.config();

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // limit each IP to 3 requests
    message: 'Too many requests'
});

const PORT = process.env.PORT || 5000;

const app = express();

// // apply to all requests
// app.use(limiter);

// http headers security
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(xss());

// enable cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ptiel', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use('/api/product', productRouter);
app.use('/api/users', limiter, userRouter);
app.use('/api/uploads', limiter, uploadRouter);
app.use('/api/admin', adminRouter);
app.use('/api/mail', mailRouter);

const __dirname = path.resolve();
app.use('frontend/public/uploads/:id', express.static(path.join(__dirname, '/frontend/public/uploads/:id')));

app.use((err, req, res, next) => {
    res.status(500).send(({ message: err.message }));
});

app.listen(PORT, () => {
    console.log('Open at http://localhost:5000')
});


