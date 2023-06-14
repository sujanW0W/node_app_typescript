import * as jwt from 'jsonwebtoken'
import { UserResponse } from './userRequest'

const generateToken = (userInfo: UserResponse): string => {
    const token = jwt.sign(userInfo, String(process.env.JWT_SECRET), {expiresIn: process.env.JWT_LIFETIME})

    return token
}

export default generateToken