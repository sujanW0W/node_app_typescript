import * as jwt from 'jsonwebtoken'

interface infoType{
    id: number,
    name: string,
    username: string,
}

const generateToken = (userInfo: infoType): string => {
    const token = jwt.sign(userInfo, String(process.env.JWT_SECRET), {expiresIn: process.env.JWT_LIFETIME})

    return token
}

export default generateToken