import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || 'secretnothere',
        // {
        //     expiresIn: '30m',
        // }
    );
};

export const isAuth = (req, res, next) => {
    const authorization =req.headers.authorization;
    if (authorization) {
        const token = authorization.split(' ')[1];
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'secretnothere',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        )
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.send("401", { message: 'Invalid Admin Token' });
    }
};








// jwt.verify(
//     token,
//     process.env.JWT_SECRET || 'secretnothere',
//     (err, decode) => {
//         if (err) {
//             res.status(401).send({ message: 'Invalid Token' });
//         } else {
//             req.user = decode;
//             next();
//         }
//     }
// )