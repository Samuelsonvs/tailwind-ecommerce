import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import { transporter } from '../config/mailSender.js';
import { emailSchema } from '../helpers/validation.js';
import { isAuth } from '../middlewares/utilsAuth.js';
import Mail from '../models/mailModel.js';
import pendingUser from '../models/pendingUserModel.js';
import nodemailer from 'nodemailer';

const mailRouter = express.Router();


mailRouter.post('/sendmail', isAuth, expressAsyncHandler(async(req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          pass: process.env.WORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
        tls: { rejectUnauthorized: false}
      });

    let message = ''
    const data = req.body;

    const mailOptions = {
        from: `${data.email} <foo@example.com>`,
        to: 'm.sametatali@gmail.com',
        subject: data.head,
        text: data.description,
    };
    
    transporter.sendMail(mailOptions, (err, mailData) =>  {
        if (err) {
            message = err
            console.log("Error " + err);
        } else {
            message = "Email send successfully";
            console.log("Email sent successfully");
        }
    });

    res.status(200).send({message})
}));


mailRouter.post('/savemail', expressAsyncHandler( async(req, res) => {
    const data = req.body;
    
    const { error } = emailSchema.validate(data, { abortEarly: false });

    if(error) {
        return res.status(404).json({ errors: error });
    } else {
        const mail = new Mail({
            email: data.email
        });
        await mail.save();
    
        res.status(200).send({message: 'Mail saved'})
    }
}));

export const mailVerify = expressAsyncHandler( async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          pass: process.env.WORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
        tls: { rejectUnauthorized: false}
    });

    let message = ''
    const email = req.body.email
    const data = await pendingUser.findOne({email})
    if (data) {
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Verification email',
            html: `
                <h3>Hello ${data.name}</h3>
                <p>Thank you for joining our application. Jus one more step...</p>
                <p>To activate your account please follow this link:</p>
                <div>${process.env.DOMAIN + data._id}</div>`
        };
           
        transporter.sendMail(mailOptions, (err, data) =>  {
            if (err) {
                message = err
                console.log("Error " + err);
            } else {
                message = "Email send successfully";
                console.log("Email sent successfully");
            }
        });
    
        res.status(200).send({message})
    } else {
        message = 'No data'
        res.status(200).send({ message })
    }
})


export default mailRouter;