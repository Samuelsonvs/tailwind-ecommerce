import multer from 'multer';
import express from 'express';
import { isAuth } from '../middlewares/utilsAuth.js';
import fs from 'fs';
import path from 'path';
import expressAsyncHandler from 'express-async-handler';

const __dirname = path.resolve();

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        const c = `frontend/public/uploads/${req.headers.path}`;
        const newp = path.join(__dirname,c);
        fs.mkdirSync(newp, { recursive: true});
        cb(null, c);
    },
    filename(req, file, cb) {   
        const datenow = (Date.now()).toString();
        cb(null, `${file.originalname.split('.')[0] + '_' + datenow.slice(5,datenow.length)}.jpg`);
    },
});

const upload = multer({ storage });

uploadRouter.post('/create', isAuth, upload.array('image',15), expressAsyncHandler( async(req, res) => {
    const paths = req.files.map((state) => (state.destination+"/"+state.filename).split('public')[1]);
    res.send({paths});
}));



export default uploadRouter;