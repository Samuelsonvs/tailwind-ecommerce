import jwt from 'jsonwebtoken';

export const generateUToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET || 'secretnothere',
        // {
        //     expiresIn: '30m',
        // }
    );
};


export const generateAToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET_ADMIN || 'secretnothere',
        // {
        //     expiresIn: '30m',
        // }
    );
};

export const isAuth = (req, res, next) => {
    const authorization = req.get('Authorization');
    if (authorization) {
        const token = JSON.parse(authorization.split(" ")[1]);
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'secretnothere',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.id = decode._id
                    req.name = decode.name;
                    req.email = decode.email
                    req.token = token;
                    next();
                }
            }
        )
    }
};

export const isAdminAuth = (req, res, next) => {
    const authorization = req.get('Authorization');
    if (authorization) {
        const token = JSON.parse(authorization.split(" ")[1]);
        jwt.verify(
            token,
            process.env.JWT_SECRET_ADMIN || 'secretnothere',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.token = token;
                    next();
                }
            }
        )
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




// export const isAuth = (req, res, next) => {
//     const authorization = req.get('Authorization');
//     if (authorization) {
//         const token = authorization.split(" ")[1];
//         console.log(token)
//         jwt.verify(
//             token,
//             process.env.JWT_SECRET || 'secretnothere',
//             (err, decode) => {
//                 if (err) {
//                     res.status(401).send({ message: 'Invalid Token' });
//                 } else {
//                     req.id = decode._id
//                     req.user = decode.name;
//                     req.token = token;
//                     next();
//                 }
//             }
//         )
//     }
// };