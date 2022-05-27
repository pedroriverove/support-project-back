import {NextFunction, Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import config from '@/config/config';

export const CheckJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = <string>req.headers["auth"];
    let jwtPayload;

    try {
        jwtPayload = <any>jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    } catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).send();
        return;
    }

    const {userId, username} = jwtPayload;
    const newToken = jwt.sign({userId, username}, config.jwtSecret, {
        expiresIn: "6h"
    });

    res.setHeader("token", newToken);

    next();
};
