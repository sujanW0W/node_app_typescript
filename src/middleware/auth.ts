import * as jwt from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'
import { ExtendedRequest } from '../utils/ExtendedRequest';
import { isUserResponse } from '../utils/userRequest';

const auth = async (req: ExtendedRequest, res: Response, next: NextFunction): Promise<void> => {
    const authString = req.headers.authorization;

    if(!authString || !authString.startsWith('Bearer '))
        throw new Error("Invalid Auth String.")

    const token = authString.split(' ')[1]

    var jwtPayload
    try {
        jwtPayload = jwt.verify(token, String(process.env.JWT_SECRET))

        if(isUserResponse(jwtPayload)){
            req.user = jwtPayload
        }
        else
            throw new Error("Invalid Token")

        next();
        
    } catch (error) {
        res.status(501).json({error})
    }

}

export default auth