import multer from 'multer';
import express from 'express';
import { isAuth } from '../middlewares/utilsAuth.js';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        const c = `frontend/public/uploads/${req.params.id}`;
        const newp = path.join(__dirname,`frontend/public/uploads/${req.params.id}`);
        fs.mkdirSync(newp, { recursive: true});
        cb(null, c);
    },
    filename(req, file, cb) {   
        const datenow = (Date.now()).toString();
        cb(null, `${file.originalname.split('.')[0] + '_' + datenow.slice(5,datenow.length)}.jpg`);
    },
});

const upload = multer({ storage });

uploadRouter.post('/:id', isAuth, upload.array('image',15), (req, res) => {
    console.log(req.files);
    res.send('Upload Successful');
});



export default uploadRouter;